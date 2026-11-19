// 查中文和英文两边对得上（改了一边，同一次提交里要把另一边也改了）：
//   nav.js：每一课、每一步、每篇 How-to、每个分组和术语都有英文（en: {}）；术语指向的 Wiki 条目存在。
//   页面：nav.js 的每一条都有中文 src/pages/<类>/<slug>.mdx 和英文 src/pages/en/<类>/<slug>.mdx，没有 nav.js 里找不到的页；
//         frontmatter 的 lesson / step / slug 和 nav.js 一致；MDX 能编译；两边复制块的 id 和图示一样；每页最多一处 <mark>；
//         中文页的站内链接不指向 /en/，英文页的站内链接都指向 /en/；标了 ready: true 的页不能还是空白页（留着「待写」）。
//   数据：wiki.en.js 和 wiki.js 的条目、分组一一对应，see 指向的条目存在；faq.en.js 和 faq.js 的分组和条数一样。
//
//   node scripts/check-i18n.mjs
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { compile } from "@mdx-js/mdx";
import { LESSONS, STEPS, HOWTO, HOWTO_FLAT, GLOSSARY } from "../src/data/nav.js";
import { WIKI, WIKI_GROUPS } from "../src/data/wiki.js";
import { WIKI_EN, WIKI_GROUPS_EN } from "../src/data/wiki.en.js";
import { FAQ } from "../src/data/faq.js";
import { FAQ_EN } from "../src/data/faq.en.js";
import { FIGS } from "../src/data/figs.js";

let bad = 0;
const fail = (where, msg) => { bad++; console.log(`✗ ${where}：${msg}`); };
const need = (x, keys, where) => { for (const k of keys) if (typeof x?.[k] !== "string" || !x[k].trim()) fail(where, `缺 ${k}`); };

for (const s of LESSONS) need(s.en, ["title", "minutes", "sum"], `nav.js 第 ${s.n} 课的 en`);
for (const s of STEPS) need(s.en, ["title", "minutes", "sum"], `nav.js 第 ${s.n} 步的 en`);
for (const g of HOWTO) need(g.en, ["group"], `nav.js How-to 分组「${g.group}」的 en`);
for (const h of HOWTO_FLAT) need(h.en, ["title"], `nav.js How-to ${h.slug} 的 en`);
for (const [k, g] of Object.entries(GLOSSARY)) {
  need(g, ["tip"], `术语「${k}」`);
  need(g.en, ["label", "tip"], `术语「${k}」的 en`);
  if (!WIKI.some((w) => w.slug === g.wiki)) fail(`术语「${k}」`, `wiki: ${g.wiki} 在 wiki.js 里没有`);
}

const PAGES = [
  ...LESSONS.map((s) => ({ kind: "start", slug: s.slug, key: "lesson", val: s.n, ready: s.ready })),
  ...STEPS.map((s) => ({ kind: "guide", slug: s.slug, key: "step", val: s.n, ready: s.ready })),
  ...HOWTO_FLAT.map((h) => ({ kind: "howto", slug: h.slug, key: "slug", val: h.slug, ready: h.ready })),
];
for (const kind of ["start", "guide", "howto"]) {
  for (const dir of [`src/pages/${kind}`, `src/pages/en/${kind}`]) {
    for (const f of existsSync(dir) ? readdirSync(dir).filter((f) => f.endsWith(".mdx")) : []) {
      if (!PAGES.some((p) => p.kind === kind && `${p.slug}.mdx` === f)) fail(`${dir}/${f}`, "nav.js 里没有这一页");
    }
  }
}

const ids = (s) => [...s.matchAll(/<Copy id="([^"]+)"/g)].map((m) => m[1]).sort().join(",");
const figs = (s) => [...s.matchAll(/<Fig id="([^"]+)"/g)].map((m) => m[1]).join(",");
const front = (s) => Object.fromEntries((s.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? "").split("\n").map((l) => l.split(/:\s*/, 2)).filter((kv) => kv.length === 2));
const STUB = /待写|TBD:/;

for (const p of PAGES) {
  const files = { zh: `src/pages/${p.kind}/${p.slug}.mdx`, en: `src/pages/en/${p.kind}/${p.slug}.mdx` };
  const src = {};
  for (const [lang, file] of Object.entries(files)) {
    if (!existsSync(file)) { fail(file, "缺这一页（node scripts/new-pages.mjs 会写一个空白页）"); continue; }
    const s = (src[lang] = readFileSync(file, "utf8"));
    if (String(front(s)[p.key]) !== String(p.val)) fail(file, `frontmatter 的 ${p.key} 应该是 ${p.val}`);
    try { await compile(s); } catch (e) { fail(file, `编译不过：${e.message.split("\n")[0]}`); }
    if ((s.match(/<mark/g) || []).length > 1) fail(file, "有不止一处 <mark>");
    for (const id of figs(s).split(",").filter(Boolean)) if (!FIGS[id]) fail(file, `figs.js 里没有图「${id}」`);
    for (const m of s.matchAll(/\]\((\/[^)\s]*)\)|href="(\/[^"]*)"/g)) {
      const href = m[1] ?? m[2];
      if (lang === "zh" && href.startsWith("/en/")) fail(file, `中文页的站内链接指向了英文页：${href}`);
      if (lang === "en" && !href.startsWith("/en/")) fail(file, `英文页的站内链接要以 /en/ 开头：${href}`);
    }
    if (p.ready && STUB.test(s)) fail(file, "nav.js 里标了 ready: true，页面还留着「待写 / TBD」");
  }
  if (src.zh && src.en) {
    if (ids(src.zh) !== ids(src.en)) fail(files.en, "复制块的 id 和中文页不一样");
    if (figs(src.zh) !== figs(src.en)) fail(files.en, `图示和中文页不一样（中文页：${figs(src.zh) || "没有"}）`);
  }
}

for (const w of WIKI) {
  if (!WIKI_EN[w.slug]) fail("wiki.en.js", `缺 ${w.slug}`);
  if (!WIKI_GROUPS.includes(w.group)) fail("wiki.js", `${w.slug} 的分组「${w.group}」不在 WIKI_GROUPS 里`);
  for (const s of w.see ?? []) if (!WIKI.some((x) => x.slug === s)) fail("wiki.js", `${w.slug} 的 see 指向不存在的 ${s}`);
  if (w.howto && !HOWTO_FLAT.some((h) => h.slug === w.howto)) fail("wiki.js", `${w.slug} 的 howto 指向不存在的 ${w.howto}`);
  if (w.step !== undefined && !STEPS.some((s) => s.n === w.step)) fail("wiki.js", `${w.slug} 的 step 指向不存在的第 ${w.step} 步`);
}
for (const slug of Object.keys(WIKI_EN)) if (!WIKI.some((w) => w.slug === slug)) fail("wiki.en.js", `${slug} 在 wiki.js 里没有`);
for (const g of WIKI_GROUPS) if (!WIKI_GROUPS_EN[g]) fail("wiki.en.js", `WIKI_GROUPS_EN 缺「${g}」`);
if (FAQ.length !== FAQ_EN.length) fail("faq.en.js", `有 ${FAQ_EN.length} 组，中文是 ${FAQ.length} 组`);
FAQ.forEach((g, i) => {
  const e = FAQ_EN[i];
  if (!e || e.id !== g.id) return fail("faq.en.js", `第 ${i + 1} 组应该是 ${g.id}`);
  if (e.items.length !== g.items.length) fail("faq.en.js", `${g.id} 组有 ${e.items.length} 条，中文是 ${g.items.length} 条`);
});

console.log(bad ? `还有 ${bad} 处要改` : `✓ 中英文对得上：${PAGES.length} 对页面、${WIKI.length} 个 Wiki 条目、${FAQ.reduce((n, g) => n + g.items.length, 0)} 条常见问题`);
process.exit(bad ? 1 : 0);

// 查 src/ 里所有指向站外的链接（不管哪个网站）：打不打得开，#锚点在线上页面里有没有。结果分四类：
//   ✓ 打得开          ✗ 打不开（4xx、5xx，不算下面那类）          ✗ 锚点不在
//   ⚠ 被挡住了，用浏览器打开看一眼：403、412、429、Cloudflare 的人机验证、跳到登录页、跳转兜圈子、超时，
//     还有打开是一个空壳、内容要靠脚本加载的页面。有的官方页面对脚本是这样，脚本看不到内容，不算失败。
// 锚点要对着线上网页查，不能从 docs/sources/raw/ 里的副本猜。PDF 和别的非网页不查锚点。
// 有打不开或锚点不在的，退出码是 1。仓库还没建的时候，本站自己的 GitHub 地址也会算打不开。
//
//   node scripts/check-doc-links.mjs        要联网；每个网址只抓一次
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const walk = (dir) => readdirSync(dir).flatMap((f) => {
  const p = join(dir, f);
  return statSync(p).isDirectory() ? walk(p) : /\.(mdx|md|js|astro)$/.test(f) ? [p] : [];
});
const SKIP = /^https?:\/\/(www\.w3\.org|localhost|127\.0\.0\.1)/;

const links = new Map();
for (const file of walk(join(ROOT, "src"))) {
  for (const m of readFileSync(file, "utf8").matchAll(/https?:\/\/[^\s)"'`<>\]\\{}$]+/g)) {
    const url = m[0].replace(/[.,;:，。、）]+$/, "");
    const host = URL.canParse(url) && new URL(url).hostname;
    if (!host || !host.includes(".") || SKIP.test(url)) continue;
    if (!links.has(url)) links.set(url, new Set());
    links.get(url).add(relative(ROOT, file));
  }
}

const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36";
const CHALLENGE = /Just a moment\.\.\.|cf-browser-verification|challenge-platform|Attention Required! \| Cloudflare|px-captcha|Pardon Our Interruption/;
const visible = (html) => html.replace(/<(script|style|noscript|template|svg)[\s\S]*?<\/\1>/gi, " ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

const pages = new Map();
const fetchPage = (url) => {
  if (!pages.has(url)) pages.set(url, (async () => {
    try {
      const r = await fetch(url, { headers: { "user-agent": UA, "accept-language": "zh-CN,zh;q=0.9,en;q=0.8" }, redirect: "follow", signal: AbortSignal.timeout(25000) });
      const type = r.headers.get("content-type") || "";
      const html = /html/.test(type) ? await r.text() : "";
      if (!/html/.test(type)) await r.body?.cancel();
      const why =
        r.headers.get("cf-mitigated") === "challenge" || CHALLENGE.test(html) ? "人机验证"
        : [403, 412, 429].includes(r.status) ? String(r.status)
        : r.ok && /\/(login|signin|sign-in)\b/i.test(new URL(r.url).pathname) && !/\/(login|signin|sign-in)\b/i.test(new URL(url).pathname) ? "跳到了登录页"
        : r.ok && /html/.test(type) && visible(html).length < 200 ? "空壳页面，内容靠脚本加载"
        : null;
      return { ok: r.ok, status: r.status, why, html };
    } catch (e) {
      const msg = String(e.cause?.message ?? e.message);
      if (e.name === "TimeoutError") return { ok: false, status: "超时", why: "超时" };
      if (/redirect/i.test(msg)) return { ok: false, status: msg, why: "跳转兜圈子" };
      return { ok: false, status: msg, why: null };
    }
  })());
  return pages.get(url);
};

const ok = [], broken = [], anchors = [], blocked = [];
const queue = [...links];
await Promise.all(Array.from({ length: 6 }, async () => {
  for (let item; (item = queue.shift()); ) {
    const [url, where] = item;
    const [page, hash] = url.split("#");
    const res = await fetchPage(page);
    const from = [...where].slice(0, 2).join(", ") + (where.size > 2 ? ` 等 ${where.size} 处` : "");
    if (res.why) blocked.push(`${url}（${res.why}） ← ${from}`);
    else if (!res.ok) broken.push(`${url}（${res.status}） ← ${from}`);
    else if (hash && res.html && !new RegExp(`(id|name)="${decodeURIComponent(hash).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`).test(res.html)) anchors.push(`${url}：线上页面没有 #${hash} ← ${from}`);
    else ok.push(url);
  }
}));

const list = (xs) => xs.sort().map((x) => `\n  ${x}`).join("");
console.log(`✓ ${ok.length} 个打得开${list(ok)}`);
if (broken.length) console.log(`✗ ${broken.length} 个打不开${list(broken)}`);
if (anchors.length) console.log(`✗ ${anchors.length} 个锚点不在${list(anchors)}`);
if (blocked.length) console.log(`⚠ ${blocked.length} 个被挡住了，脚本看不到，用浏览器打开看一眼${list(blocked)}`);
process.exitCode = broken.length || anchors.length ? 1 : 0;

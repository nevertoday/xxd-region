// 给 nav.js 里每个还没有页面的条目（新手入门、完整教程、How-to）写一对空白页：中文 src/pages/<类>/<slug>.mdx，英文 src/pages/en/<类>/<slug>.mdx。
// 已经有的页一个字都不动，所以随时可以重跑。在 nav.js 里加了一课、一步或一篇 How-to，跑一次就有了两种语言的页。
//
//   node scripts/new-pages.mjs
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { LESSONS, STEPS, HOWTO_FLAT } from "../src/data/nav.js";

const ZH = "{/* 待写：正文。写法见 docs/MAINTAINING.md 的「怎么写」和「硬规矩」，资料和出处在 docs/sources/README.md。 */}";
const EN = "{/* 待写 TBD: body. See docs/MAINTAINING.md (voice and hard rules); facts and their links are in docs/sources/README.md. */}";
const pages = [
  ...LESSONS.map((s) => ["start", s.slug, "Lesson", `lesson: ${s.n}`]),
  ...STEPS.map((s) => ["guide", s.slug, "Guide", `step: ${s.n}`]),
  ...HOWTO_FLAT.map((h) => ["howto", h.slug, "HowTo", `slug: ${h.slug}`]),
];
let n = 0;
for (const [kind, slug, layout, key] of pages) {
  for (const [file, up, stub] of [[`src/pages/${kind}/${slug}.mdx`, "../..", ZH], [`src/pages/en/${kind}/${slug}.mdx`, "../../..", EN]]) {
    if (existsSync(file)) continue;
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, `---\nlayout: ${up}/layouts/${layout}.astro\n${key}\n---\n${stub}\n`);
    n++;
    console.log(`+ ${file}`);
  }
}
console.log(n ? `✓ 写了 ${n} 个空白页` : "✓ nav.js 里的每一条都已经有中英文两页");

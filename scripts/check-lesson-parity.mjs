// node scripts/check-lesson-parity.mjs . <lang> <locale>      e.g. node scripts/check-lesson-parity.mjs . ja ja-jp
// Compares src/pages/<lang>/start/*.mdx with the English lessons and with Apple's own copy of each cited article in that language
// (docs/sources/raw/official/support-<lang>/, fetched by docs/sources/tools/fetch-list.sh; the locales are in docs/TRANSLATE.md).
// A language with no Apple Support locale passes en-us; so does any single article Apple hasn't localized: those are checked against support-en/.
//   - the same Apple articles (and anchors), on the language's locale; a link the English already points at another locale stays as it is
//   - the same site links (lessons on /<lang>/start/, everything else on /en/) and the same other external links (Apple's terms, developer pages)
//   - the same components, Term keys, Fig ids and numbers; every <Term> passes text= so it doesn't show the English label
//   - every bold UI label is written the way that Apple copy writes it (bold lead-ins that end a sentence, like "**Spend the balance.**", aren't labels)
// Links are compared as lists with counts but not order, so a translation may reorder them within a lesson.
// A lesson still identical to the English copy only gets the structural checks, and the report says so.
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const [repo, lang, locale] = process.argv.slice(2);
if (!repo || !lang || !/^[a-z]{2}-[a-z]{2}$/.test(locale ?? "")) {
  console.log("usage: node scripts/check-lesson-parity.mjs . <lang> <locale>   (locale like ja-jp, or en-us when Apple has none)");
  process.exit(2);
}
const raw = join(repo, "docs/sources/raw/official");
const local = join(raw, `support-${lang}`);
const LESSONS = readdirSync(join(repo, "src/pages/en/start")).filter((f) => f.endsWith(".mdx")).sort();
if (locale !== "en-us" && !existsSync(local)) {
  console.log(`✗ no local Apple copies in ${local}. Fetch them first:\n  bash docs/sources/tools/fetch-list.sh docs/sources/tools/official-urls.tsv docs/sources/raw/official`);
  process.exit(1);
}
const localized = (id) => locale !== "en-us" && existsSync(join(local, `${id}.md`));

const norm = (s) => s.replace(/[’‘]/g, "'").replace(/[\u00a0\u202f\u2009]/g, " ").replace(/\s+/g, " ").toLowerCase();
const appleLinks = (s) => [...s.matchAll(/https:\/\/support\.apple\.com\/([a-z]{2}-[a-z]{2})\/(\d+)(#[\w-]+)?/g)].map((m) => ({ loc: m[1], id: m[2], anchor: m[3] ?? "" }));
const siteLinks = (s) => [...s.matchAll(/\]\((\/[^)\s]*)\)|href="(\/[^"]*)"/g)].map((m) => m[1] ?? m[2]);
const otherLinks = (s) => [...s.matchAll(/https?:\/\/(?!support\.apple\.com\/)[^\s)"'`<>\]]+/g)].map((m) => m[0]);
// what one list has that the other lacks, counting repeats
const minus = (xs, ys) => { const left = [...ys]; return xs.filter((x) => { const i = left.indexOf(x); if (i < 0) return true; left.splice(i, 1); return false; }); };
const same = (f, what, want, got) => {
  const lack = minus(want, got), extra = minus(got, want);
  if (lack.length || extra.length) fail(`${f}: ${what} differ${lack.length ? `\n  missing: ${lack.join(" ")}` : ""}${extra.length ? `\n  extra:   ${extra.join(" ")}` : ""}`);
};
const count = (s, re) => (s.match(re) || []).length;
const list = (s, re) => [...s.matchAll(re)].map((m) => m[1]).join(",");
// The English spells small counts out ("ten devices", "two pages"); a translation may write them as digits, the way Apple's own localized articles do (10台, 10대)
const WORDS = { one: "1", two: "2", three: "3", four: "4", five: "5", six: "6", seven: "7", eight: "8", nine: "9", ten: "10", eleven: "11", twelve: "12" };
const spelled = (s) => [...s.toLowerCase().matchAll(/\b(one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)\b/g)].map((m) => WORDS[m[1]]);
const nums = (s) => s.replace(/https?:\/\/\S+/g, "").replace(/\(\/[^)]*\)/g, "").replace(/<(Fig|Term)\b[^>]*>/g, "").match(/\d+(?:\.\d+)?/g) || [];
const COMPONENTS = [["<Term", /<Term /g], ["<Callout", /<Callout /g], ["<Q", /<Q /g], ["<Fig", /<Fig /g], ["<Reply", /<Reply /g], ["<Copy", /<Copy /g], ["<Tabs", /<Tabs /g], ["<mark>", /<mark>/g], ["<strong>", /<strong>/g], ["<u>", /<u>/g], ["`code`", /`[^`\n]+`/g]];

let bad = 0, copies = 0;
const fail = (m) => { bad++; console.log(`✗ ${m}`); };
const cited = new Set();

for (const f of LESSONS) {
  const en = readFileSync(join(repo, "src/pages/en/start", f), "utf8");
  const zh = readFileSync(join(repo, "src/pages/start", f), "utf8");
  const path = join(repo, "src/pages", lang, "start", f);
  if (!existsSync(path)) { fail(`${f}: missing ${path}`); continue; }
  const tr = readFileSync(path, "utf8");
  const copy = tr.replaceAll(`/${lang}/start/`, "/en/start/") === en;
  if (copy) { copies++; console.log(`  ${f}: still the English copy; checking structure only`); }

  // copies still point at en-us, so only the article ids count there; a translation also has to use the right locale
  const want = (l) => (copy ? "" : `${l.loc !== "en-us" ? l.loc : localized(l.id) ? locale : "en-us"}/`) + l.id + l.anchor;
  const got = (l) => (copy ? "" : `${l.loc}/`) + l.id + l.anchor;
  same(f, "Apple support links", appleLinks(en).map(want), appleLinks(tr).map(got));
  appleLinks(en).forEach((l) => cited.add(l.id));
  same(f, "site links", siteLinks(en).map((h) => h.replace(/^\/en\/start\//, `/${lang}/start/`)), siteLinks(tr));
  same(f, "other external links (Apple's terms and developer pages stay exactly as in English)", otherLinks(en), otherLinks(tr));

  for (const [name, re] of COMPONENTS) if (count(en, re) !== count(tr, re)) fail(`${f}: ${name} count ${count(tr, re)}, English has ${count(en, re)}`);
  for (const [name, re] of [["Term keys", /<Term k="([^"]+)"/g], ["Fig ids", /<Fig id="([^"]+)"/g], ["Callout types", /<Callout type="([^"]+)"/g]])
    if (list(en, re) !== list(tr, re)) fail(`${f}: ${name} ${list(tr, re)}, English ${list(en, re)}`);
  if (!copy) for (const m of tr.matchAll(/<Term k="([^"]+)"( text="[^"]+")?/g)) if (!m[2]) fail(`${f}: <Term k="${m[1]}"> has no text=, so it shows the English label`);

  const left = minus(nums(tr), nums(en));
  const dropped = minus(nums(en), nums(tr));
  const added = left.filter((n) => !nums(zh).includes(n) && !spelled(en).includes(n));
  if (dropped.length) fail(`${f}: numbers in the English missing here: ${dropped.join(", ")}`);
  if (added.length) fail(`${f}: numbers in neither the English nor the Chinese: ${added.join(", ")}`);
  if (left.length > added.length) console.log(`  note ${f}: extra numbers that the Chinese original also has: ${left.filter((n) => !added.includes(n)).join(", ")}`);
}

if (copies < LESSONS.length) {
  const files = [...cited].map((id) => join(localized(id) ? local : join(raw, "support-en"), `${id}.md`));
  const gone = files.filter((p) => !existsSync(p));
  if (gone.length) fail(`local Apple copies missing (run docs/sources/tools/fetch-list.sh): ${gone.join(", ")}`);
  const corpus = norm(files.filter((p) => existsSync(p)).map((p) => readFileSync(p, "utf8")).join("\n"));
  const english = [...cited].filter((id) => !localized(id));
  if (english.length && locale !== "en-us") console.log(`  note: Apple has no ${locale} copy of ${english.join(", ")}; those links and labels use en-us`);
  for (const f of LESSONS) {
    const tr = readFileSync(join(repo, "src/pages", lang, "start", f), "utf8");
    if (tr.replaceAll(`/${lang}/start/`, "/en/start/") === readFileSync(join(repo, "src/pages/en/start", f), "utf8")) continue;
    const missing = [];
    for (const m of tr.matchAll(/\*\*([^*]+)\*\*/g)) {
      const label = m[1].replace(/<Term [^>]*text="([^"]+)"[^>]*\/>/g, "$1").replace(/<[^>]+>/g, "").trim();
      if (/[.。．!！:：]$/.test(label)) continue;
      if (!corpus.includes(norm(label))) missing.push(label);
    }
    if (missing.length) fail(`${f}: bold labels not in the ${locale} Apple copy of the cited articles: ${[...new Set(missing)].join(" | ")}`);
  }
}

const what = copies === LESSONS.length ? `all ${copies} lessons are still the English copies and match its structure` : `lessons match the English articles, links, components and numbers; every bold label is in the ${locale} Apple copy${copies ? ` (${copies} still English copies)` : ""}`;
console.log(bad ? `${bad} problem(s)` : `✓ ${lang}: ${what}`);
process.exit(bad ? 1 : 0);

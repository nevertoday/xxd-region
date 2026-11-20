# Translation brief: 8 more languages (2026-11-19)

This site is Chinese (root) and English (`/en/`). It now also has Japanese, Korean, Spanish, Portuguese (Brazil), French, German, Russian and Arabic, each with the home page and the three beginner lessons; the full guide, how-tos, wiki and FAQ link to the English version. The scaffold is in place: every file below exists and builds, holding the English text. Translators replace the English with their language and change nothing else.

## The user's goal
The unofficial Apple Account regions guide (appleid.xiaoxiaodong.ai) explains, for people who live in mainland China and want a US or Turkey Apple Account, what an account's region decides, why iCloud and the App Store are two separate sign-ins, and why a second account is simpler than moving the main one. The translations let readers of eight more languages read the same three lessons. They must read like a friend explaining (one core idea per page, a small scene first, connected sentences), not like a word-for-word translation.

## Read first
- `docs/MAINTAINING.md`: 「写作规矩（硬规矩）」, 「商标」 and 「怎么写」. The hard rules and the voice apply to every language.
- The originals: `src/pages/en/start/{1-region,2-two-sign-ins,3-new-account}.mdx` (translate from these), `src/pages/start/…` (Chinese, check it for intent), `src/i18n/base.js` (English UI strings and home page), `src/views/Home.astro`, `README.en.md`.
- Apple's own copy of every article the lessons cite, in your language: `docs/sources/raw/official/support-<lang>/<id>.md`, where `<id>` is the number in the lesson's `support.apple.com/en-us/<id>` link. They are local only (not in git); if the folder is missing, fetch them with `bash docs/sources/tools/fetch-list.sh docs/sources/tools/official-urls.tsv docs/sources/raw/official`.
- How the sister site xxd-saily did the same eight languages, for layout and tone only (its content is about a different product): `../xxd-saily/src/i18n/<lang>.js`, `../xxd-saily/src/pages/<lang>/start/`.

## Languages
| `<lang>` | Pages | Apple Support locale | Footer and links menu |
| --- | --- | --- | --- |
| ja | `/ja/` | ja-jp | support.apple.com/ja-jp/apple-account |
| ko | `/ko/` | ko-kr | support.apple.com/ko-kr/apple-account |
| es | `/es/` | es-es | support.apple.com/es-es/apple-account |
| pt (Brazil) | `/pt/` | pt-br | support.apple.com/pt-br/apple-account |
| fr | `/fr/` | fr-fr | support.apple.com/fr-fr/apple-account |
| de | `/de/` | de-de | support.apple.com/de-de/apple-account |
| ru | `/ru/` | ru-ru | support.apple.com/ru-ru/apple-id (Apple's Russian page still has the old address) |
| ar (right-to-left) | `/ar/` | ar-ae | support.apple.com/ar-ae/apple-account |

All 16 articles the lessons cite exist in all eight locales (checked 2026-11-20 UTC). The footer and links menu links are already set in `src/data/nav.js` (`APPLE_BY_LANG`).

## Your files, per language `<lang>`
1. `src/i18n/<lang>.js`: translate every string value. Keep every key, array length and `{placeholder}` exactly. Labels that name the full guide, how-to, wiki and FAQ say they are in English where base.js does. The footer (`ui.foot`) keeps every part of the independence and trademark statement: an independent guide, not authorized, sponsored or otherwise approved by Apple Inc., not speaking for Apple; Apple, App Store and iCloud are trademarks of Apple Inc. The `figs` block at the end is the text of the two diagrams in lessons 2 and 3: write the button names in it the way your Apple copy of 104958 and 117294 writes them.
2. `src/pages/<lang>/index.astro`: already correct, don't touch.
3. `src/pages/<lang>/start/1-region.mdx`, `2-two-sign-ins.mdx`, `3-new-account.mdx`: translate from the English, checking the Chinese for intent.
   - Keep the frontmatter keys (`layout`, `tldr`, `lesson`), every component, every `<Term k="…">` key and `<Fig id="…">`, the single `<mark>`, every number and date. Translate the `q="…"` of each `<Q>`, the `title="…"` of the `<Callout>`, and give every `<Term>` a `text="…"` with the word in your language (without it the page shows the English label).
   - The `<Reply>` in lesson 2 is Apple's own message: use the wording from your language's 118412 (Japanese: 「このデバイスはすでに他のApple Accountに関連付けられています。このデバイスは[日数]日間、他のApple Accountに関連付けることができません」).
   - Links: lessons link to `/<lang>/start/…` (already done); every other site page stays on `/en/…`. Apple Support links point at the same article on your locale: swap `en-us` for it (`support.apple.com/ja-jp/118283`). The one link the English deliberately points at `zh-cn` (lesson 3, "118283, Chinese version") stays `zh-cn`. Apple's terms (US, Turkey, China mainland, GCBD) and `developer.apple.com` links stay exactly as they are.
4. `README.<lang>.md`: new file. Translate `README.en.md` in the same voice, with the same images (`assets/en/hero.svg`, `assets/en/readme/*.svg`) exactly as README.en.md uses them. The language bar is the 10-language line in README.en.md with your language in bold instead of English. The `<sub>` tagline says 10 languages instead of "Chinese and English" (README.md and README.en.md switch to that when the translations are merged). Site links go to `https://appleid.xiaoxiaodong.ai/<lang>/` for the home page and the lessons, `/en/` for everything else; Apple Support links on your locale.

## Rules
- **Keep the site's framing.** It is written for readers who live in mainland China. Don't retarget it at readers in your country. China-specific facts stay as they are (the China mainland store, GCBD, Alipay and WeChat Pay, +86 numbers). Don't add facts about your own country: its store, prices, payment methods or laws.
- **Facts stay exactly as in the English.** Don't add or drop facts, numbers, dates, prices or links. If a sentence is hard to say naturally, change the sentence, not the fact.
- **UI labels in bold, exactly as your language's Apple article writes them.** Look each label up in `support-<lang>/<id>.md` for the article the sentence cites (for Japanese: **設定**, **メディアと購入**, **サインアウト**, **[あなたの名前]ではない場合**). If that article doesn't show it, search the other files in `support-<lang>/`. If no Apple copy has it, keep the English label in bold and explain it in your language. Product names follow the same copies: Apple Account is "Apple Account" in Japanese and German, "Apple 계정" in Korean, "Cuenta de Apple" in Spanish, "Conta Apple" in Portuguese, "compte Apple" in French, "Аккаунт Apple" in Russian and "حساب Apple" in Arabic.
- **Quotes.** A quote from an Apple support article uses that sentence as your language's copy of the article writes it. A quote from Apple's terms (the US terms are in English only) is translated faithfully and keeps its link.
- **The hard rules in `docs/MAINTAINING.md`**: no addresses and nothing on how to make one up; nothing on network setup (VPNs, proxies, nodes); no sellers of gift cards or accounts, no shared, bought or borrowed accounts; no price comparisons or "cheap region" framing; no referral links. Lesson 1's address section is carried over faithfully: what the terms let Apple do, that Apple hasn't said how it handles a region that doesn't match where you live, that the billing address must match your bank's, and that this isn't legal advice. No winks ("nobody checks", "the risk is tiny") and no scare words ("you will be banned").
- **People are gender-neutral.** Friends, people in examples and X authors get no gendered pronoun; rephrase where your language would otherwise force one.
- **The voice is a friend explaining, in your language.** Conversational and warm, the way the site's Chinese and English read, using the natural register for a how-to written to one reader (for example du in German, as Apple's German articles write).
- **One `<mark>` per page**, on the sentence the English marks.
- Arabic is right-to-left: the layout handles direction; keep commands, codes and Latin product names as they are.
- MDX: no bare `<`, `{`, `}` in prose.

## Checks before you report
`npm run build`, then `node scripts/check-i18n.mjs <lang>` (no ✗), `npm run check`, and `node scripts/check-lesson-parity.mjs . <lang> <locale>` with the locale from the table (for example `node scripts/check-lesson-parity.mjs . ja ja-jp`). The parity check compares your lessons with the English: the same Apple articles on your locale, the same site and external links, the same components, Term keys, diagrams and numbers, a `text=` on every `<Term>`, and every bold label found in your language's Apple copy (bold lead-ins that end a sentence, like "**Spend the balance.**", aren't checked as labels). On a lesson that is still the English copy it checks structure only and says so. Don't start a dev server; if you must look, serve `dist/` with `python3 -m http.server <port> --bind 127.0.0.1` and kill it after. Commit on your branch: `git add -A && git commit -m "<lang>: …"`. Don't push.

## Report
Per language: files changed, any label you couldn't find in the Apple copies, anything you were unsure how to say, the commit hash.

## Adding another language later (maintainer)
1. Add it to `LANGS` in `src/data/nav.js` (no `full: true`) and its Apple Account page to `APPLE_BY_LANG`.
2. Copy `src/i18n/base.js` to `src/i18n/<lang>.js` with a `figs` block (the `en` text of each figure in `LESSON_FIGS`, `src/data/figs.js`), import it in `src/i18n/index.js` and add it to `EXTRA`.
3. Create `src/pages/<lang>/index.astro` (the same lines as `src/pages/en/index.astro`) and English copies of the three lessons in `src/pages/<lang>/start/` with lesson links on `/<lang>/start/`.
4. Add one `official-urls.tsv` row per article the English lessons cite (`https://support.apple.com/<locale>/<id>`, `support-<lang>/<id>.md`, `--html`) and fetch them with `fetch-list.sh`.

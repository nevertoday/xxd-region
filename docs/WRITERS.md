# Shared brief for content writers (xxd-region)

## The user's goal
An independent, open-source, unofficial learning site at appleid.xiaoxiaodong.ai for people in mainland China who want an Apple Account (Apple ID) in another region, mainly the United States and Turkey. It explains what an account's region decides, how Apple's own sign-up, payment and region-change flows work, how to use a second account for the App Store while iCloud stays on your own, and what to do about subscriptions, gift cards and locked accounts. It is honest about Apple's rule that an account's region is meant to be where you live, and it never supplies addresses or workarounds. Chinese at the root, English under /en/, no other languages. The sister sites https://payout.xiaoxiaodong.ai and https://saily.xiaoxiaodong.ai (sources: /Volumes/T7-usb/js/xxd-payout, /Volumes/T7-usb/js/xxd-saily, read-only for you) are the model for tone, page shapes and voice: a friend who knows the subject explaining it, Kevin Kelly style (one core idea per page, a picture or small story first, connected sentences).

## Read before writing
1. `docs/MAINTAINING.md` in your worktree: the hard rules (写作规矩), the sources rules (资料来源), the trademark rules (商标) and the 「怎么写」 voice section. Follow them exactly.
2. `docs/sources/README.md`: every fact the site may use, each with its Apple link. Sections 1–14 and 19 are the facts by topic, 15 what Apple doesn't say (write those as unconfirmed), 16 where Apple's pages disagree, 18 the article list with en/zh titles.
3. `docs/sources/COMMUNITY.md`: what readers actually get stuck on, from X posts. Use it to choose stories and problems. Only the 12 posts MAINTAINING lists may be linked.
4. The originals in `/Volumes/T7-usb/js/xxd-region/docs/sources/raw/` (local only, not in git): `official/support-en/<id>.md` and `official/support-zh/<id>.md` (same article in English and Chinese; zh gives the Chinese UI labels), `official/legal/`, `official/developer/`, `official/pricing/`, and `community/x-*.md`. Read the ones your pages rely on in full.
5. For page shape, 2 or 3 matching xxd-payout pages (`src/pages/start/*.mdx`, `src/pages/guide/1-choose.mdx`, `src/pages/howto/paypal-limited.mdx`, `src/data/wiki.js`) and the components they import. Copy the shape, not the content.

## Facts and sources
- Every factual statement (rules, steps, button names, prices, what Apple does) comes from an Apple page listed in `docs/sources/README.md`. Write it in your own words, quote at most one sentence, and link the page the fact came from: `https://support.apple.com/zh-cn/<id>` on zh pages, `https://support.apple.com/en-us/<id>` on en pages; terms and developer pages by their own URL.
- Where Apple's en and zh versions of an article differ (README section 16), say which one you follow and why. When the zh page lacks something only en has, the zh page may link the en-us article and say so.
- Prices carry「截至 2026-11-19」/ "as of 2026-11-19" and the price page link. Prices change; say so. Never present Turkey as a cheap region or compare prices across regions.
- Things README section 15 lists as unconfirmed are written as unconfirmed, with "ask Apple Support": 「这一点 Apple 的页面没有写明，拿不准就先问 Apple 支持。」 Never resolve them yourself.
- Inferences are labelled as inferences (MAINTAINING gives the Activation Lock wording).
- X posts: only as clearly labelled user experience (「有网友在 X 上分享……」 / "One user on X reports …") with a link, never as the source of a rule, price or step, and only the 12 posts MAINTAINING lists.
- Never write: addresses, address generators, tax-free states, "fill in anything"; VPN/proxy/node advice or whether one is needed; named sellers of gift cards or accounts, discounted cards, virtual cards, SMS-code services, third-party payment tools; shared, bought or borrowed accounts; Activation Lock bypasses; price arbitrage (subscribe in Turkey and share, resell, "save X%"); referral codes; "100% success" claims.
- The address question gets the treatment MAINTAINING describes: state Apple's Home Country rule and what the terms let Apple do, note that Apple hasn't said what it does in practice, note that a billing address must match the bank's records, then leave the decision to the reader. No winks, no scare words.
- UI labels in bold, exactly as the zh-cn article writes them on zh pages (「**媒体与购买项目**」) and as the en-us article writes them on en pages. Where the zh-cn article doesn't have a label, keep the English in bold with a Chinese gloss.
- Examples never show real emails, phone numbers, card or gift card codes, order numbers or names.
- The site is unofficial and not legal advice. Don't speak for Apple. No Apple logos or icons anywhere, including figures.

## Terms
`src/data/nav.js` already has the glossary (`GLOSSARY`): Apple 账户, 国家或地区, 居住国家或地区, 媒体与购买项目, 备选账户, 云上贵州, 家人共享, 充值卡, Apple 账户余额, 双重认证, 受信任电话号码, 激活锁. Wrap a term's first use on a page in `<Term k="…" />` with exactly one of these keys. Need another term? List it in your report; don't add it yourself.

## Files
- Write only the files your brief lists, zh and /en/ twin together, same facts and structure. Don't edit `src/data/nav.js` (the main session flips `ready` flags after merging); list nav changes you need in your report. Don't edit files another writer owns.
- Link other pages by their slugs in `nav.js` even if they're still being written by someone else.

## Checks before you report
- `npm run build`, `node scripts/check-i18n.mjs` and `node scripts/check-site.mjs` pass in your worktree. Run `node scripts/check-doc-links.mjs` and report every broken link, missing anchor and blocked page among the links you added.
- No bare `<`, `{`, `}` in MDX prose; one `<mark>` per page at most; Reply blocks titled 示意 / "Illustration".
- Commit on your branch in your worktree (`git add -A && git commit -m "<short message>"`). Don't push.
- Don't start a dev server. If you must look at a page, serve `dist/` with `python3 -m http.server <port> --bind 127.0.0.1`, kill what you started when you're done, and confirm with `lsof -i :<port>` that the port is free. Before you report, `pgrep -fl 'wrangler|workerd|esbuild|vite|http.server|astro'` must show nothing of yours.

## Report
Files written; for each page its one core idea (zh/en); the sources each fact relies on (README section and URL); every price with its "as of" date; any statement you couldn't source (and left out); unconfirmed items you wrote as unconfirmed; community posts you cited; glossary terms or nav changes you need; your commit hash.

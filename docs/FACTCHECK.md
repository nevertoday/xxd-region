# Fact-check brief (xxd-region)

The site at /Volumes/T7-usb/js/xxd-region is an unofficial learning site about Apple Account regions (US and Turkey accounts, for readers in mainland China), Chinese at the root and English under /en/. Its rule: every factual statement comes from an Apple page (support articles, terms, developer docs); posts from X appear only as clearly labelled user experience, and only 12 named posts may be linked. You are checking that, independently of the writers.

## Sources (local copies; read the ones your pages cite in full)
- Apple support: `docs/sources/raw/official/support-en/<id>.md` and `support-zh/<id>.md`. A link `https://support.apple.com/<locale>/<id>` maps to those files.
- Terms and other Apple pages: `docs/sources/raw/official/legal/`, `developer/`, `pricing/`, `newsroom/`. Each file starts with its URL.
- Notes: `docs/sources/README.md` (section 15 is what Apple doesn't say; section 16 where Apple's pages disagree; section 19 the late additions).
- Community: `docs/sources/COMMUNITY.md` and `docs/sources/raw/community/x-*.md`.
- Rules: `docs/MAINTAINING.md` (写作规矩, 商标).

## What to check, sentence by sentence
1. **Supported.** Each claim about Apple (rules, steps, button names, prices, what Apple does or may do) is stated or clearly implied by the Apple page it links or a nearby one. Plain-language explanation and the writer's own clearly marked examples are fine; invented steps, labels, numbers or behavior are not.
2. **Not distorted.** Home Country, what Apple may do to an account, gift card rules, iCloud migration out of China mainland, region-change prerequisites, payment methods per region, subscription price-rise rules and refunds say exactly what the source says, no stronger, no weaker.
3. **Unconfirmed stays unconfirmed.** Anything README section 15 lists is written as "Apple doesn't say", with a pointer to Apple Support, never resolved. Inferences (Activation Lock with someone else's account) are labelled as inferences.
4. **Forbidden content absent.** No addresses, address generators, tax-free states or "fill in anything"; no VPN, proxy or node advice and no claim about whether one is needed; no named sellers of gift cards or accounts, discounted cards, virtual cards, SMS-code services or third-party payment tools; no shared, bought or borrowed accounts; no Activation Lock bypass; no price arbitrage or "Turkey is cheap" framing; no referral codes; no "100% success" claims. The address question is handled as MAINTAINING describes (rule, consequences, unconfirmed in practice, billing address must match the bank, decision left to the reader), with no winks and no scare words.
5. **Community claims labelled and allowed.** Anything from X is marked as one user's experience with a link, isn't used as the source of a rule, price or step, and links only one of the 12 posts MAINTAINING lists.
6. **Links.** Each Apple link points to a page that exists locally and supports the sentence; zh pages link zh-cn articles (or say why they link en-us); en pages link en-us.
7. **Labels.** Bold UI labels match the zh-cn article's wording on zh pages and the en-us wording on en pages.
8. **zh and en agree** on every fact.
9. **No copying** of Apple's paragraphs; at most one short quote per page.
10. **Trademarks.** No Apple logo or icons; Apple names used only to refer to Apple's products; nothing implies Apple endorses the site.

## What to do
- Fix problems directly in your files only, with the smallest edit: correct, soften to what the source says, or delete. Keep the voice and the rules in `docs/MAINTAINING.md`. Edit zh and en together.
- Don't run any server. Don't commit. Don't touch files outside your list.
- Report: each change (file:line, old claim, what the source says with file and a few words, new text), borderline claims you kept, and counts (claims checked, changed, deleted).

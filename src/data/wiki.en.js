// English Wiki entries: same slugs and structure as wiki.js. Only the text fields; slug/see/step/howto come from wiki.js.
// Same voice as the Chinese (docs/MAINTAINING.md): a friend who knows how this works, explaining it plainly. `like` is a picture the reader recognizes,
// `here` is connected sentences, and each myth quotes what the reader might think, then answers it. At most one ==highlight== per entry.
// Site links point at /en/…; every fact links its official Apple source from docs/sources/README.md.
// 待写 TBD: only titles so far; one, like, here and myths are empty until each entry is written.
export const WIKI_GROUPS_EN = {
  "账户和地区": "Accounts and regions",
  "付款": "Paying",
  "安全": "Staying safe",
};

const stub = (title) => ({ title, one: "", like: "", here: [], myths: [] });

export const WIKI_EN = {
  "apple-account": stub("Apple Account (Apple ID)"),
  "home-country": stub("An account's country or region"),
  "media-purchases": stub("Media & Purchases"),
  "icloud-china": stub("iCloud operated by GCBD"),
  "app-availability": stub("Which regions an app is in"),
  "family-sharing": stub("Family Sharing"),
  "payment-none": stub("The None payment option"),
  "gift-card": stub("Apple Gift Card"),
  "subscription-price": stub("Subscription price rises"),
  "two-factor": stub("Two-factor authentication and trusted phone numbers"),
  "activation-lock": stub("Activation Lock"),
  "account-locked": stub("A locked account"),
};

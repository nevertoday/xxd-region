// de（Deutsch）：结构照 base.js（英文底稿）。缺的键会显示英文。待翻译：现在还是英文原样。
// 英文底稿：非全站语言（ja ko es pt fr de ru ar）的全部文字都照这个结构写（src/i18n/<语言>.js），缺的键显示这里的英文。
// {名字} 是占位，由 fmt() 换成值，翻译时原样保留。
// 这些语言只有首页和新手入门三课；完整教程、How-to、Wiki、常见问题链到英文版，所以导航里写明「英文」。
// 文字和中英文页一样：界面照 layouts/Site.astro 的 UI.en，首页照 views/Home.astro 的 EN（完整教程按钮多写了「English」），组件照各组件里的英文。
export default {
  ui: {
    brand: "Apple Account regions, for beginners",
    desc: "An unofficial guide to Apple Account countries and regions: what the region decides, how to create a US or Turkey account and pay for things, how to sign the App Store into another account while iCloud stays put, and what to watch when changing region or subscribing.",
    skip: "Skip to content",
    menu: "Open menu",
    search: "Search the guide",
    searchPh: "Search lessons, steps, how-tos, terms, questions…",
    searchEmpty: "Nothing found. Try another word",
    look: "Appearance",
    lang: "Language",
    repo: "This guide on GitHub",
    repoMore: "More: Apple Support",
    repoDefault: "Default",
    // 两个链接：[名字, 一句说明]，顺序固定（本教程、Apple 支持）
    repos: [
      ["This guide", "Unofficial, not affiliated with Apple; file issues here"],
      ["Apple Support", "The reference for account, payment and region rules"],
    ],
    navLabel: "Site navigation",
    start: "Start",
    home: "Home",
    lessons: "Beginner track: start here",
    more: "More (in English)",
    main: "Full guide: step by step",
    howto: "How-to: how exactly",
    wiki: "Wiki: what is it",
    faq: "FAQ",
    toc: "On this page",
    tocLabel: "On this page",
    hintMain: "Full guide (English)",
    hintLesson: "Beginner track",
    hintFaq: "FAQ (English)",
    section: "Section",
    // 页脚里 {apple} 那个链接上的字
    appleLink: "Apple Support",
    // {apple} 和 {github} 会换成链接。独立声明和商标归属照 Apple 的商标指南写，意思一句都不能少（见 docs/MAINTAINING.md「商标」）
    foot: "Apple Account regions, for beginners is an independent guide and has not been authorized, sponsored, or otherwise approved by Apple Inc. It doesn't speak for Apple. Apple, App Store and iCloud are trademarks of Apple Inc. Account, payment and region rules change: {apple} and Apple's terms are the reference. Source and feedback for this guide are on {github}.",
    // 顶栏「外观」面板（UI Kit 的外观设置组）
    appearance: {
      group: "Appearance", theme: "Theme", light: "Light", dark: "Dark", system: "System",
      corners: "Rounded corners", cornersDesc: "Off keeps every corner square",
      accent: "Accent", accentDesc: "Used for buttons, selection and focus",
    },
  },

  home: {
    h1: "An account in another region, without touching your main one",
    // lead：前半句、荧光笔那一句、后半句
    lead: ["For people who live in mainland China and want a US or Turkey Apple Account: the app a friend recommended isn't in the China mainland store, or the service you want isn't offered there. This site explains what an account's country or region decides, how Apple's own sign-up, payment and region-change flows work, how to sign the App Store into a second account while iCloud stays yours, and what to do about subscriptions, gift cards and locked accounts. ", "This is an unofficial, open-source guide", ", not affiliated with Apple, not speaking for Apple, and not legal advice."],
    cta: ["Start here if you're new", "Go to the full guide (English)"],
    ctaNote: "The beginner track is three lessons: what an account's region decides, why iCloud and the App Store are two separate sign-ins, and why a second account is simpler than moving your main one to another region.",
    painH: "Has this happened to you?",
    PAIN: [
      "A friend recommended an app, and however you search, it isn't in your China mainland App Store.",
      "You want to switch the App Store to another region's account, but you're scared of tapping the wrong Sign Out and losing the photos and contacts in your iCloud.",
      "Every tutorial says something different about the address, the payment option and whether to move your main account, and you can't tell which to believe.",
    ],
    lessonsH: "Beginners need just three lessons",
    lessonsP: "Read them in order, about 25 minutes in all. By the end you'll know what an account's region decides and what Apple's terms say about it, why iCloud always stays on your own account while the other-region account goes only under Media & Purchases, and why a second account is simpler than moving your main one. Everything else on the site is there to look up when you need it.",
    lessonsLabel: "Beginner track: 3 lessons",
    fitH: "Is it for you?", yesH: "Yes, if", noH: "This site won't teach",
    YES: ["You live in mainland China and have a China mainland Apple Account of your own", "You want an app or service only the US or Turkey store has, and you're happy to follow Apple's own flows", "You want to understand the rules before you decide whether to sign up and how to pay"],
    NO: ["Specific addresses, or how to make one up", "Network setup: VPNs, proxies, nodes", "Shared accounts, or accounts bought or borrowed", "Price-gap tricks: cheap-region subscriptions, splitting plans, reselling"],
    tracksH: "What this site covers",
    tracksP: "The beginner track explains the ideas; the full guide then takes you through it step by step.",
    // 完整教程只有英文和中文
    devNote: "The full guide is in English (and Chinese) for now.",
    // TRACKS：每个是 [标题, 说明]，图标、顺序和对应的教程步骤固定（在 views/Home.astro 的 TRACK_BASE）
    TRACKS: [
      ["Create an account in another region", "Know what you want it for, get an email address and phone number ready, pick the right country or region, and pay with what Apple lists for that region."],
      ["Use it under Media & Purchases only", "Switch the App Store to the other-region account, download and update, then switch back, with iCloud on your own account throughout."],
      ["Subscriptions and account safety", "Where to manage subscriptions and how Apple tells you about a price rise; when the account is locked or a purchase is refused, go to Apple, and don't buy, borrow or share accounts."],
    ],
    tracksLabel: "Matching steps in the full guide",
    // 每件事下面链到完整教程的一步：{n} 是第几步，{title} 是那一步的标题（英文）
    stepLink: "Step {n}: {title}",
  },

  // 新手入门三课在导航、首页路线图里的标题、时间、简介（顺序：1 地区管什么、2 两个登录位、3 另注册一个）
  lessons: [
    { title: "What an account's region decides", minutes: "8 minutes", sum: "The region decides which apps the store has, what currency prices are in and how you can pay; Apple's terms tie it to where you live" },
    { title: "iCloud and the App Store are two separate sign-ins", minutes: "8 minutes", sum: "Keep your own account in iCloud and sign the other-region account into Media & Purchases only; never put someone else's account in iCloud" },
    { title: "Make a second account; leave your main one alone", minutes: "8 minutes", sum: "Moving your main account means clearing your balance, subscriptions and Family Sharing first, and a China mainland account's iCloud moves out of GCBD; a second account is simpler" },
  ],

  // 一课的页面框架
  lesson: {
    eyebrow: "Beginner track · lesson {n} of {total}",
    prog: "Progress: lesson {n} of {total}",
    nav: "Previous and next lesson",
    prev: "Previous",
    next: "Next",
    pending: "Next (in progress)",
    title: "Lesson {n}: {title}",
    tldr: "In one line",
  },

  // 正文里用到的组件
  comp: {
    callout: { ok: "You should see", warn: "Heads up", no: "Don't do this", tip: "Tip" },
    copyTitle: "Copy this",
    copy: "Copy",
    cmdDone: "Command copied",
    cmdLabel: "Copy command: {c}",
    reply: "Illustration: roughly what you'll see",
    // 每页末尾一行：{lead} {gh 链接}{faq[0]}{faq[1] 链接}{faq[2]}。点开的 issue 模板用英文（维护者看得懂）
    feedback: {
      lead: "Something on this page unclear, or didn't work as written?",
      gh: "Bring it up on GitHub",
      faq: [". Or check the ", "FAQ", " first."],
    },
    // 首页、常见问题末尾的「提问和讨论」卡片
    contact: {
      h: "Questions and discussion",
      p: "Stuck on a step, found something unclear, or hit an error message the guide doesn't cover? Bring it to GitHub. The questions that come up most get worked into the guide.",
      faq: ["Before asking, check the ", "FAQ", ": many answers are already there."],
      btn: "Ask or discuss on GitHub",
      x: "The author is on X",
      privacy: "Before sending screenshots, blur out your Apple Account email, phone number, card or gift card codes, order numbers and your name.",
    },
  },

  // 新手三课里的图示：界面文字和每张图的文字，结构照 src/data/figs.js 里那张图的 en
  figs: {
    ui: { label: "Diagram", replay: "Replay" },
    "l2-two-sign-outs": {
      a: {
        who: "Sign Out at the bottom of [your name]",
        steps: ["Settings → your name → scroll to the bottom", "Tap Sign Out"],
        end: "Signs you out of iCloud, the App Store, iMessage and FaceTime at once",
      },
      b: {
        who: "Sign Out under Media & Purchases",
        steps: ["Settings → your name", "Media & Purchases → Sign Out", "Not [your name]? → the other-region account"],
        end: "Only the account you buy with changes; iCloud stays yours",
      },
      cap: "Both buttons say Sign Out. To switch the App Store account, use the one under Media & Purchases.",
    },
    "l3-before-change": {
      layers: [
        { t: "Spend the balance", d: "Too little left for one item? Apple Support can clear it" },
        { t: "Cancel subscriptions and wait", d: "Cancel the ones that block a change, then let the period run out" },
        { t: "Wait for pending items", d: "Memberships, pre-orders, rentals, Season Passes, refunds" },
        { t: "Check Family Sharing", d: "Group members might not be able to change" },
        { t: "Have a payment method for the new region", d: "You might need to enter a valid one" },
        { t: "Download your content first", d: "Some content might not be available in the new region" },
        { t: "China mainland accounts: iCloud leaves GCBD", d: "Once it's migrated, GCBD deletes its copy" },
      ],
      cap: "Sort these out before you move your main account to another region; the last one only applies to China mainland accounts. A second account skips all of it.",
    },
  },
};

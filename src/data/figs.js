// 正文里的图示（components/Fig.astro 画）。每张图一个 id，MDX 里写 <Fig id="…" />。
//   type：画法（compare 两条路对比、term 终端、folder 文件夹、anatomy 一句话拆成几块、stack 分层、
//         flow 几步流程、night 一夜、ladder 由强到弱、fan 几个模型挑刺、tree 一个带几个）
//   base：和语言无关的部分（图标、命令、哪一步要你开口……；term 的窗口标题写在 base.app）
//   zh / en：文字，两种语言结构一样。中文页和英文页同一位置放同一张图（check-i18n 会查）。
// 每种画法要哪些字段，看 Fig.astro 里对应的那一段。
// 写图里的字：短，一格一件事；不重复正文的整句，也不重复「卖点」（见 docs/MAINTAINING.md）。
export const FIG_UI = {
  zh: { label: "图示", replay: "再看一遍" },
  en: { label: "Diagram", replay: "Replay" },
};

export const FIGS = {
  // 第 2 课：设置里两个都叫「退出登录」的按钮（104958、117294）
  "l2-two-sign-outs": {
    type: "compare",
    base: { a: { icons: ["Settings", "LogOut"] }, b: { icons: ["Settings", "LogOut", "LogIn"] } },
    zh: {
      a: { who: "姓名那一页最下面的「退出登录」", steps: ["设置 → 你的姓名 → 滑到底", "轻点「退出登录」"], end: "iCloud、App Store、iMessage 信息、FaceTime 通话一起退出" },
      b: { who: "「媒体与购买项目」里的「退出登录」", steps: ["设置 → 你的姓名", "媒体与购买项目 → 退出登录", "不是 [你的姓名]？→ 登外区账户"], end: "只换了买东西用的账户，iCloud 还是你自己的" },
      cap: "两个按钮都叫「退出登录」。要换 App Store 的账户，只点「媒体与购买项目」里的那一个。",
    },
    en: {
      a: { who: "Sign Out at the bottom of [your name]", steps: ["Settings → your name → scroll to the bottom", "Tap Sign Out"], end: "Signs you out of iCloud, the App Store, iMessage and FaceTime at once" },
      b: { who: "Sign Out under Media & Purchases", steps: ["Settings → your name", "Media & Purchases → Sign Out", "Not [your name]? → the other-region account"], end: "Only the account you buy with changes; iCloud stays yours" },
      cap: "Both buttons say Sign Out. To switch the App Store account, use the one under Media & Purchases.",
    },
  },

  // 第 3 课：给主账户换地区前要先处理的几样（118283；最后一条出自 111754 和云上贵州的 iCloud 条款）
  "l3-before-change": {
    type: "stack",
    base: { icons: ["Wallet", "CalendarX", "Hourglass", "Users", "CreditCard", "Download", "Cloud"], hi: 6 },
    zh: {
      layers: [
        { t: "用完余额", d: "不够买一件东西，找 Apple 支持清零" },
        { t: "取消订阅，等它到期", d: "会阻止更改的订阅，取消后等这一期结束" },
        { t: "等处理中的项目结束", d: "会员资格、预购、影片租借、季票、退款" },
        { t: "看一眼家人共享", d: "群组成员可能改不了" },
        { t: "准备新地区的付款方式", d: "可能要输入一个有效的" },
        { t: "先把内容下载好", d: "有些内容在新地区可能不可用" },
        { t: "国区账户：iCloud 迁出云上贵州", d: "迁完以后，云上贵州删掉它那一份" },
      ],
      cap: "给主账户换地区之前，这几样都要先处理，最后一条只对国区账户成立。另注册一个账户，这些都不用碰。",
    },
    en: {
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

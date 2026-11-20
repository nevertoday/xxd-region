// fr（Français）：结构照 base.js（英文底稿）。缺的键会显示英文。
// 英文底稿：非全站语言（ja ko es pt fr de ru ar）的全部文字都照这个结构写（src/i18n/<语言>.js），缺的键显示这里的英文。
// {名字} 是占位，由 fmt() 换成值，翻译时原样保留。
// 这些语言只有首页和新手入门三课；完整教程、How-to、Wiki、常见问题链到英文版，所以导航里写明「英文」。
// 文字和中英文页一样：界面照 layouts/Site.astro 的 UI.en，首页照 views/Home.astro 的 EN（完整教程按钮多写了「English」），组件照各组件里的英文。
export default {
  ui: {
    brand: "Les régions des comptes Apple, expliquées simplement",
    desc: "Un guide non officiel sur le pays ou la région des comptes Apple : ce que décide la région, comment créer un compte américain ou turc et payer, comment connecter l’App Store à un autre compte sans toucher à iCloud, et à quoi faire attention quand on change de région ou qu’on s’abonne.",
    skip: "Aller au contenu",
    menu: "Ouvrir le menu",
    search: "Rechercher dans le guide",
    searchPh: "Une leçon, une étape, une fiche, un terme, une question…",
    searchEmpty: "Aucun résultat. Essayez un autre mot",
    look: "Apparence",
    lang: "Langue",
    repo: "Ce guide sur GitHub",
    repoMore: "Et aussi : l’Assistance Apple",
    repoDefault: "Par défaut",
    // 两个链接：[名字, 一句说明]，顺序固定（本教程、Apple 支持）
    repos: [
      ["Ce guide", "Non officiel, sans lien avec Apple ; signalez les problèmes ici"],
      ["Assistance Apple", "La référence pour les règles des comptes, des paiements et des régions"],
    ],
    navLabel: "Navigation du site",
    start: "Commencer",
    home: "Accueil",
    lessons: "Premiers pas : commencez ici",
    more: "Pour aller plus loin (en anglais)",
    main: "Guide complet : pas à pas",
    howto: "Fiches pratiques : comment faire",
    wiki: "Wiki : c’est quoi ?",
    faq: "FAQ",
    toc: "Sur cette page",
    tocLabel: "Sur cette page",
    hintMain: "Guide complet (en anglais)",
    hintLesson: "Premiers pas",
    hintFaq: "FAQ (en anglais)",
    section: "Section",
    // 页脚里 {apple} 那个链接上的字
    appleLink: "Assistance Apple",
    // {apple} 和 {github} 会换成链接。独立声明和商标归属照 Apple 的商标指南写，意思一句都不能少（见 docs/MAINTAINING.md「商标」）
    foot: "« Les régions des comptes Apple, expliquées simplement » est un guide indépendant, qui n’a été ni autorisé, ni sponsorisé, ni approuvé de quelque autre manière par Apple Inc. Il ne parle pas au nom d’Apple. Apple, App Store et iCloud sont des marques d’Apple Inc. Les règles des comptes, des paiements et des régions changent : ce sont lâ{apple} et les conditions d’Apple qui font foi. Le code source de ce guide et vos retours sont sur {github}.",
    // 顶栏「外观」面板（UI Kit 的外观设置组）
    appearance: {
      group: "Apparence", theme: "Thème", light: "Clair", dark: "Sombre", system: "Système",
      corners: "Coins arrondis", cornersDesc: "Désactivé, tous les coins restent carrés",
      accent: "Couleur d’accent", accentDesc: "Pour les boutons, la sélection et l’élément actif",
    },
  },

  home: {
    h1: "Un compte dans une autre région, sans toucher à votre compte principal",
    // lead：前半句、荧光笔那一句、后半句
    lead: ["Pour les personnes qui vivent en Chine continentale et veulent un compte Apple américain ou turc : l’app qu’on vous a recommandée n’est pas dans la boutique de Chine continentale, ou le service que vous voulez n’y est pas proposé. Ce site explique ce que décide le pays ou la région d’un compte, comment se passent l’inscription, le paiement et le changement de région chez Apple, comment connecter l’App Store à un second compte tout en gardant iCloud sur le vôtre, et que faire pour les abonnements, les cartes cadeaux et les comptes verrouillés. ", "C’est un guide non officiel et open source", ", sans lien avec Apple, qui ne parle pas au nom d’Apple et ne constitue pas un conseil juridique."],
    cta: ["Vous débutez ? Commencez ici", "Aller au guide complet (en anglais)"],
    ctaNote: "Les premiers pas tiennent en trois leçons : ce que décide la région d’un compte, pourquoi iCloud et l’App Store sont deux connexions séparées, et pourquoi un second compte est plus simple que de faire passer votre compte principal dans une autre région.",
    painH: "Ça vous est déjà arrivé ?",
    PAIN: [
      "On vous a recommandé une app, et vous avez beau chercher, elle n’est pas dans votre App Store de Chine continentale.",
      "Vous voulez passer l’App Store sur le compte d’une autre région, mais vous avez peur de toucher le mauvais bouton de déconnexion et de perdre les photos et les contacts de votre iCloud.",
      "Chaque tutoriel dit autre chose sur l’adresse, l’option de paiement et la question de changer ou non la région de votre compte principal, et vous ne savez plus qui croire.",
    ],
    lessonsH: "Trois leçons suffisent pour débuter",
    lessonsP: "Lisez-les dans l’ordre, environ 25 minutes en tout. À la fin, vous saurez ce que décide la région d’un compte et ce qu’en disent les conditions d’Apple, pourquoi iCloud reste toujours sur votre propre compte alors que le compte de l’autre région ne va que dans Contenu multimédia et achats, et pourquoi un second compte est plus simple que de déplacer votre compte principal. Tout le reste du site est là pour être consulté quand vous en aurez besoin.",
    lessonsLabel: "Premiers pas : 3 leçons",
    fitH: "Ce site est-il fait pour vous ?", yesH: "Oui, si", noH: "Ce que ce site n’enseigne pas",
    YES: ["Vous vivez en Chine continentale et vous avez votre propre compte Apple de Chine continentale", "Vous voulez une app ou un service que seule la boutique américaine ou turque propose, et suivre les procédures d’Apple elles-mêmes vous convient", "Vous voulez comprendre les règles avant de décider de vous inscrire et de choisir comment payer"],
    NO: ["Des adresses précises, ou comment en inventer une", "La configuration réseau : VPN, proxys, nœuds", "Les comptes partagés, achetés ou empruntés", "Les astuces d’écart de prix : abonnements dans une région « pas chère », partage de forfaits, revente"],
    tracksH: "Ce que couvre ce site",
    tracksP: "Les premiers pas expliquent les idées ; le guide complet vous accompagne ensuite étape par étape.",
    // 完整教程只有英文和中文
    devNote: "Pour l’instant, le guide complet n’existe qu’en anglais (et en chinois).",
    // TRACKS：每个是 [标题, 说明]，图标、顺序和对应的教程步骤固定（在 views/Home.astro 的 TRACK_BASE）
    TRACKS: [
      ["Créer un compte dans une autre région", "Savoir à quoi il va vous servir, préparer une adresse e-mail et un numéro de téléphone, choisir le bon pays ou la bonne région, et payer avec ce qu’Apple liste pour cette région."],
      ["Ne l’utiliser que dans Contenu multimédia et achats", "Passer l’App Store sur le compte de l’autre région, télécharger et mettre à jour, puis revenir, avec iCloud sur votre propre compte du début à la fin."],
      ["Abonnements et sécurité du compte", "Où gérer vos abonnements et comment Apple vous prévient d’une hausse de prix ; quand le compte est verrouillé ou qu’un achat est refusé, adressez-vous à Apple, et n’achetez, n’empruntez ni ne partagez de compte."],
    ],
    tracksLabel: "Les étapes correspondantes du guide complet",
    // 每件事下面链到完整教程的一步：{n} 是第几步，{title} 是那一步的标题（英文）
    stepLink: "Étape {n} : {title}",
  },

  // 新手入门三课在导航、首页路线图里的标题、时间、简介（顺序：1 地区管什么、2 两个登录位、3 另注册一个）
  lessons: [
    { title: "Ce que décide la région d’un compte", minutes: "8 minutes", sum: "La région décide quelles apps propose la boutique, dans quelle monnaie sont les prix et comment vous pouvez payer ; les conditions d’Apple la lient à l’endroit où vous vivez" },
    { title: "iCloud et l’App Store sont deux connexions séparées", minutes: "8 minutes", sum: "Gardez votre propre compte dans iCloud et ne connectez le compte de l’autre région qu’à Contenu multimédia et achats ; ne mettez jamais le compte de quelqu’un d’autre dans iCloud" },
    { title: "Créez un second compte, laissez le principal tranquille", minutes: "8 minutes", sum: "Déplacer votre compte principal, c’est d’abord régler le solde, les abonnements et le partage familial, et l’iCloud d’un compte de Chine continentale quitte GCBD ; un second compte est plus simple" },
  ],

  // 一课的页面框架
  lesson: {
    eyebrow: "Premiers pas · leçon {n} sur {total}",
    prog: "Progression : leçon {n} sur {total}",
    nav: "Leçon précédente et leçon suivante",
    prev: "Précédente",
    next: "Suivante",
    pending: "Suivante (en préparation)",
    title: "Leçon {n} : {title}",
    tldr: "En une phrase",
  },

  // 正文里用到的组件
  comp: {
    callout: { ok: "Vous devriez voir", warn: "Attention", no: "À éviter", tip: "Astuce" },
    copyTitle: "À copier",
    copy: "Copier",
    cmdDone: "Commande copiée",
    cmdLabel: "Copier la commande : {c}",
    reply: "Illustration : à peu près ce que vous verrez",
    // 每页末尾一行：{lead} {gh 链接}{faq[0]}{faq[1] 链接}{faq[2]}。点开的 issue 模板用英文（维护者看得懂）
    feedback: {
      lead: "Quelque chose n’est pas clair sur cette page, ou ne marche pas comme c’est écrit ?",
      gh: "Dites-le sur GitHub",
      faq: [". Ou jetez d’abord un œil à la ", "FAQ", " (en anglais)."],
    },
    // 首页、常见问题末尾的「提问和讨论」卡片
    contact: {
      h: "Questions et échanges",
      p: "Une étape vous bloque, quelque chose n’est pas clair, ou vous tombez sur un message d’erreur dont le guide ne parle pas ? Venez en parler sur GitHub. Les questions qui reviennent le plus souvent finissent dans le guide.",
      faq: ["Avant de demander, regardez la ", "FAQ", " (en anglais) : beaucoup de réponses y sont déjà."],
      btn: "Poser une question ou en discuter sur GitHub",
      x: "La personne derrière ce guide est sur X",
      privacy: "Avant d’envoyer des captures d’écran, floutez l’adresse e-mail de votre compte Apple, votre numéro de téléphone, les codes de vos cartes bancaires ou cartes cadeaux, vos numéros de commande et votre nom.",
    },
  },

  // 新手三课里的图示：界面文字和每张图的文字，结构照 src/data/figs.js 里那张图的 en
  figs: {
    ui: { label: "Schéma", replay: "Revoir" },
    "l2-two-sign-outs": {
      a: {
        who: "Déconnexion, en bas de [votre nom]",
        steps: ["Réglages → votre nom → tout en bas", "Touchez Déconnexion"],
        end: "Vous déconnecte d’un coup d’iCloud, de l’App Store, d’iMessage et de FaceTime",
      },
      b: {
        who: "Se déconnecter, dans Contenu multimédia et achats",
        steps: ["Réglages → votre nom", "Contenu multimédia et achats → Se déconnecter", "Vous n’êtes pas [votre nom] ? → le compte de l’autre région"],
        end: "Seul le compte qui sert aux achats change ; iCloud reste le vôtre",
      },
      cap: "Les deux boutons servent à se déconnecter. Pour changer de compte App Store, utilisez celui de Contenu multimédia et achats.",
    },
    "l3-before-change": {
      layers: [
        { t: "Dépenser le solde", d: "Trop peu pour un seul article ? L’Assistance Apple peut le vider" },
        { t: "Résilier les abonnements et attendre", d: "Résiliez ceux qui bloquent le changement, puis laissez la période se terminer" },
        { t: "Attendre la fin des activités en cours", d: "Abonnements, précommandes, locations, passes de saison, remboursements" },
        { t: "Vérifier le partage familial", d: "Les membres d’un groupe ne pourront peut-être pas changer" },
        { t: "Avoir un mode de paiement pour la nouvelle région", d: "Vous devrez peut-être en saisir un valide" },
        { t: "Télécharger d’abord votre contenu", d: "Certains contenus pourraient ne pas être disponibles dans la nouvelle région" },
        { t: "Comptes de Chine continentale : iCloud quitte GCBD", d: "Une fois la migration faite, GCBD supprime sa copie" },
      ],
      cap: "Réglez tout cela avant de faire passer votre compte principal dans une autre région ; le dernier point ne concerne que les comptes de Chine continentale. Un second compte vous évite tout ça.",
    },
  },
};

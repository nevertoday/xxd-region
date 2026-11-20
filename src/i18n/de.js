// de（Deutsch）：结构照 base.js（英文底稿）。缺的键会显示英文。
// 英文底稿：非全站语言（ja ko es pt fr de ru ar）的全部文字都照这个结构写（src/i18n/<语言>.js），缺的键显示这里的英文。
// {名字} 是占位，由 fmt() 换成值，翻译时原样保留。
// 这些语言只有首页和新手入门三课；完整教程、How-to、Wiki、常见问题链到英文版，所以导航里写明「英文」。
// 文字和中英文页一样：界面照 layouts/Site.astro 的 UI.en，首页照 views/Home.astro 的 EN（完整教程按钮多写了「English」），组件照各组件里的英文。
export default {
  ui: {
    brand: "Apple Account-Regionen, einfach erklärt",
    desc: "Eine inoffizielle Anleitung zu Ländern und Regionen von Apple Accounts: was die Region bestimmt, wie du einen Account für die USA oder die Türkei erstellst und damit bezahlst, wie du den App Store mit einem anderen Account anmeldest, während iCloud bleibt, wo es ist, und worauf du beim Regionswechsel und bei Abos achten solltest.",
    skip: "Zum Inhalt springen",
    menu: "Menü öffnen",
    search: "Anleitung durchsuchen",
    searchPh: "Lektionen, Schritte, How-tos, Begriffe, Fragen…",
    searchEmpty: "Nichts gefunden. Probier ein anderes Wort",
    look: "Darstellung",
    lang: "Sprache",
    repo: "Diese Anleitung auf GitHub",
    repoMore: "Mehr: Apple Support",
    repoDefault: "Standard",
    // 两个链接：[名字, 一句说明]，顺序固定（本教程、Apple 支持）
    repos: [
      ["Diese Anleitung", "Inoffiziell, ohne Verbindung zu Apple; Probleme hier melden"],
      ["Apple Support", "Maßgeblich für die Regeln zu Account, Zahlung und Region"],
    ],
    navLabel: "Seitennavigation",
    start: "Start",
    home: "Startseite",
    lessons: "Einsteigerkurs: hier anfangen",
    more: "Mehr (auf Englisch)",
    main: "Vollständige Anleitung: Schritt für Schritt",
    howto: "How-to: wie genau",
    wiki: "Wiki: was ist das?",
    faq: "Häufige Fragen",
    toc: "Auf dieser Seite",
    tocLabel: "Auf dieser Seite",
    hintMain: "Vollständige Anleitung (Englisch)",
    hintLesson: "Einsteigerkurs",
    hintFaq: "Häufige Fragen (Englisch)",
    section: "Abschnitt",
    // 页脚里 {apple} 那个链接上的字
    appleLink: "Apple Support",
    // {apple} 和 {github} 会换成链接。独立声明和商标归属照 Apple 的商标指南写，意思一句都不能少（见 docs/MAINTAINING.md「商标」）
    foot: "„Apple Account-Regionen, einfach erklärt“ ist eine unabhängige Anleitung und wurde von Apple Inc. weder autorisiert noch gesponsert oder anderweitig genehmigt. Sie spricht nicht für Apple. Apple, App Store und iCloud sind Marken von Apple Inc. Regeln zu Account, Zahlung und Region ändern sich: Maßgeblich sind der {apple} und Apples Bedingungen. Quellcode und Feedback zu dieser Anleitung findest du auf {github}.",
    // 顶栏「外观」面板（UI Kit 的外观设置组）
    appearance: {
      group: "Darstellung", theme: "Farbschema", light: "Hell", dark: "Dunkel", system: "System",
      corners: "Abgerundete Ecken", cornersDesc: "Aus: Alle Ecken bleiben eckig",
      accent: "Akzentfarbe", accentDesc: "Für Buttons, Auswahl und Fokus",
    },
  },

  home: {
    h1: "Ein Account in einer anderen Region, ohne deinen Hauptaccount anzufassen",
    // lead：前半句、荧光笔那一句、后半句
    lead: ["Für alle, die in Festlandchina leben und einen Apple Account für die USA oder die Türkei wollen: Die App, die dir jemand empfohlen hat, gibt es im App Store von Festlandchina nicht, oder der Dienst, den du willst, wird dort nicht angeboten. Diese Seite erklärt, was das Land oder die Region eines Accounts bestimmt, wie Apples eigene Abläufe für Registrierung, Zahlung und Regionswechsel funktionieren, wie du den App Store mit einem zweiten Account anmeldest, während iCloud bei dir bleibt, und was du bei Abos, Geschenkkarten und gesperrten Accounts tun kannst. ", "Das ist eine inoffizielle Open-Source-Anleitung", ", ohne Verbindung zu Apple; sie spricht nicht für Apple und ist keine Rechtsberatung."],
    cta: ["Neu hier? Fang hier an", "Zur vollständigen Anleitung (Englisch)"],
    ctaNote: "Der Einsteigerkurs hat drei Lektionen: was die Region eines Accounts bestimmt, warum iCloud und der App Store zwei getrennte Anmeldungen sind und warum ein zweiter Account einfacher ist, als deinen Hauptaccount in eine andere Region umzuziehen.",
    painH: "Kennst du das?",
    PAIN: [
      "Jemand hat dir eine App empfohlen, und egal, wie du suchst: In deinem App Store für Festlandchina ist sie nicht da.",
      "Du willst den App Store auf den Account einer anderen Region umstellen, hast aber Angst, auf das falsche Abmelden zu tippen und die Fotos und Kontakte in deiner iCloud zu verlieren.",
      "Jede Anleitung sagt etwas anderes zur Adresse, zur Zahlungsoption und dazu, ob du deinen Hauptaccount umziehen sollst, und du weißt nicht, wem du glauben sollst.",
    ],
    lessonsH: "Für den Anfang reichen drei Lektionen",
    lessonsP: "Lies sie der Reihe nach, zusammen etwa 25 Minuten. Danach weißt du, was die Region eines Accounts bestimmt und was Apples Bedingungen dazu sagen, warum iCloud immer bei deinem eigenen Account bleibt, während der Account aus der anderen Region nur unter Medien & Käufe kommt, und warum ein zweiter Account einfacher ist, als deinen Hauptaccount umzuziehen. Alles andere auf der Seite kannst du nachschlagen, wenn du es brauchst.",
    lessonsLabel: "Einsteigerkurs: 3 Lektionen",
    fitH: "Ist das was für dich?", yesH: "Ja, wenn", noH: "Das bringt dir diese Seite nicht bei",
    YES: ["Du wohnst in Festlandchina und hast deinen eigenen Apple Account für Festlandchina", "Du willst eine App oder einen Dienst, den es nur im Store der USA oder der Türkei gibt, und folgst gern Apples eigenen Abläufen", "Du willst die Regeln verstehen, bevor du entscheidest, ob du dich registrierst und wie du bezahlst"],
    NO: ["Konkrete Adressen oder wie man sich eine ausdenkt", "Netzwerk-Einrichtung: VPNs, Proxys, Nodes", "Geteilte Accounts oder gekaufte bzw. geliehene Accounts", "Tricks mit Preisunterschieden: Abos in „billigen Regionen“, Pläne aufteilen, Weiterverkauf"],
    tracksH: "Was diese Seite abdeckt",
    tracksP: "Der Einsteigerkurs erklärt die Ideen; die vollständige Anleitung führt dich dann Schritt für Schritt hindurch.",
    // 完整教程只有英文和中文
    devNote: "Die vollständige Anleitung gibt es vorerst auf Englisch (und Chinesisch).",
    // TRACKS：每个是 [标题, 说明]，图标、顺序和对应的教程步骤固定（在 views/Home.astro 的 TRACK_BASE）
    TRACKS: [
      ["Einen Account in einer anderen Region erstellen", "Kläre, wofür du ihn brauchst, halte eine E-Mail-Adresse und eine Telefonnummer bereit, wähl das richtige Land oder die richtige Region und bezahl mit dem, was Apple für diese Region auflistet."],
      ["Ihn nur unter Medien & Käufe nutzen", "Stell den App Store auf den Account der anderen Region um, lade und aktualisiere, und wechsle dann zurück, während iCloud die ganze Zeit auf deinem eigenen Account bleibt."],
      ["Abos und Sicherheit des Accounts", "Wo du Abos verwaltest und wie Apple dir eine Preiserhöhung mitteilt; ist der Account gesperrt oder wird ein Kauf abgelehnt, wende dich an Apple, und kauf, leih oder teil keine Accounts."],
    ],
    tracksLabel: "Passende Schritte in der vollständigen Anleitung",
    // 每件事下面链到完整教程的一步：{n} 是第几步，{title} 是那一步的标题（英文）
    stepLink: "Schritt {n}: {title}",
  },

  // 新手入门三课在导航、首页路线图里的标题、时间、简介（顺序：1 地区管什么、2 两个登录位、3 另注册一个）
  lessons: [
    { title: "Was die Region eines Accounts bestimmt", minutes: "8 Minuten", sum: "Die Region bestimmt, welche Apps der Store hat, in welcher Währung die Preise stehen und wie du bezahlen kannst; Apples Bedingungen knüpfen sie an deinen Wohnsitz" },
    { title: "iCloud und der App Store sind zwei getrennte Anmeldungen", minutes: "8 Minuten", sum: "Lass deinen eigenen Account in iCloud und melde den Account aus der anderen Region nur unter Medien & Käufe an; fremde Accounts gehören nie in iCloud" },
    { title: "Einen zweiten Account erstellen, den Hauptaccount in Ruhe lassen", minutes: "8 Minuten", sum: "Wer den Hauptaccount umzieht, muss vorher Guthaben, Abos und Familienfreigabe klären, und bei Festlandchina zieht die iCloud von GCBD weg; ein zweiter Account ist einfacher" },
  ],

  // 一课的页面框架
  lesson: {
    eyebrow: "Einsteigerkurs · Lektion {n} von {total}",
    prog: "Fortschritt: Lektion {n} von {total}",
    nav: "Vorherige und nächste Lektion",
    prev: "Zurück",
    next: "Weiter",
    pending: "Weiter (in Arbeit)",
    title: "Lektion {n}: {title}",
    tldr: "In einem Satz",
  },

  // 正文里用到的组件
  comp: {
    callout: { ok: "Das solltest du sehen", warn: "Achtung", no: "Lieber nicht", tip: "Tipp" },
    copyTitle: "Zum Kopieren",
    copy: "Kopieren",
    cmdDone: "Befehl kopiert",
    cmdLabel: "Befehl kopieren: {c}",
    reply: "Beispiel: So ungefähr sieht es aus",
    // 每页末尾一行：{lead} {gh 链接}{faq[0]}{faq[1] 链接}{faq[2]}。点开的 issue 模板用英文（维护者看得懂）
    feedback: {
      lead: "Ist auf dieser Seite etwas unklar, oder hat etwas nicht so geklappt wie beschrieben?",
      gh: "Sag es auf GitHub",
      faq: [". Oder schau zuerst bei den ", "häufigen Fragen", " nach."],
    },
    // 首页、常见问题末尾的「提问和讨论」卡片
    contact: {
      h: "Fragen und Austausch",
      p: "Hängst du bei einem Schritt fest, ist dir etwas unklar, oder siehst du eine Fehlermeldung, die die Anleitung nicht abdeckt? Bring es auf GitHub. Fragen, die oft kommen, fließen in die Anleitung ein.",
      faq: ["Bevor du fragst, schau bei den ", "häufigen Fragen", " nach. Viele Antworten stehen schon dort."],
      btn: "Auf GitHub fragen oder diskutieren",
      x: "Die Person hinter dieser Anleitung auf X",
      privacy: "Bevor du Screenshots schickst, mach die E-Mail-Adresse deines Apple Accounts, deine Telefonnummer, Karten- und Geschenkkartencodes, Bestellnummern und deinen Namen unkenntlich.",
    },
  },

  // 新手三课里的图示：界面文字和每张图的文字，结构照 src/data/figs.js 里那张图的 en
  figs: {
    ui: { label: "Schaubild", replay: "Nochmal ansehen" },
    "l2-two-sign-outs": {
      a: {
        who: "„Abmelden“ ganz unten unter „[dein Name]“",
        steps: ["Einstellungen → [dein Name] → ganz nach unten scrollen", "Auf „Abmelden“ tippen"],
        end: "Meldet dich auf einmal von iCloud, dem App Store, iMessage und FaceTime ab",
      },
      b: {
        who: "„Abmelden“ unter „Medien & Käufe“",
        steps: ["Einstellungen → dein Name", "Medien & Käufe → Abmelden", "Nicht [Dein Name]? → Account der anderen Region"],
        end: "Nur der Account zum Einkaufen wechselt; iCloud bleibt bei dir",
      },
      cap: "Beide Buttons heißen „Abmelden“. Um den App Store-Account zu wechseln, nimm den unter „Medien & Käufe“.",
    },
    "l3-before-change": {
      layers: [
        { t: "Guthaben ausgeben", d: "Zu wenig für einen Artikel übrig? Der Apple Support kann es ausgleichen" },
        { t: "Abos kündigen und warten", d: "Die kündigen, die einen Wechsel blockieren, dann den Zeitraum auslaufen lassen" },
        { t: "Laufende Vorgänge abwarten", d: "Mitgliedschaften, Vorbestellungen, Leihfilme, Season Passes, Rückerstattungen" },
        { t: "Familienfreigabe prüfen", d: "Mitglieder einer Gruppe können die Region möglicherweise nicht ändern" },
        { t: "Zahlungsmethode für die neue Region", d: "Möglicherweise musst du eine gültige eingeben" },
        { t: "Inhalte vorher laden", d: "Manche Inhalte sind in der neuen Region möglicherweise nicht verfügbar" },
        { t: "Festlandchina: iCloud verlässt GCBD", d: "Nach der Migration löscht GCBD seine Kopie" },
      ],
      cap: "Kläre das, bevor du deinen Hauptaccount in eine andere Region umziehst; der letzte Punkt gilt nur für Accounts aus Festlandchina. Ein zweiter Account spart dir das alles.",
    },
  },
};

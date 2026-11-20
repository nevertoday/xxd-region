// es（Español，照 Apple 的 es-es 用 tú）：结构照 base.js（英文底稿）。缺的键会显示英文。
// 按钮名和术语照 Apple 支持的 es-es 文章（docs/sources/raw/official/support-es/）。{名字} 是占位，由 fmt() 换成值，翻译时原样保留。
// 这些语言只有首页和新手入门三课；完整教程、How-to、Wiki、常见问题链到英文版，所以导航里写明「英文」。
export default {
  ui: {
    brand: "Regiones de la Cuenta de Apple, para principiantes",
    desc: "Una guía no oficial sobre los países y regiones de la Cuenta de Apple: qué decide la región, cómo crear una cuenta de EE. UU. o de Turquía y pagar con ella, cómo iniciar sesión en el App Store con otra cuenta sin mover iCloud, y qué vigilar al cambiar de región o al suscribirte.",
    skip: "Ir al contenido",
    menu: "Abrir menú",
    search: "Buscar en la guía",
    searchPh: "Busca lecciones, pasos, how-tos, términos, preguntas…",
    searchEmpty: "No hay resultados. Prueba con otra palabra",
    look: "Apariencia",
    lang: "Idioma",
    repo: "Esta guía en GitHub",
    repoMore: "Más: Soporte técnico de Apple",
    repoDefault: "Predeterminado",
    // 两个链接：[名字, 一句说明]，顺序固定（本教程、Apple 支持）
    repos: [
      ["Esta guía", "No oficial y sin relación con Apple; deja aquí tus comentarios"],
      ["Soporte técnico de Apple", "La referencia sobre las normas de cuentas, pagos y regiones"],
    ],
    navLabel: "Navegación del sitio",
    start: "Empezar",
    home: "Inicio",
    lessons: "Para principiantes: empieza aquí",
    more: "Más (en inglés)",
    main: "Guía completa: paso a paso",
    howto: "How-to: cómo hacerlo",
    wiki: "Wiki: qué es cada cosa",
    faq: "Preguntas frecuentes",
    toc: "En esta página",
    tocLabel: "En esta página",
    hintMain: "Guía completa (en inglés)",
    hintLesson: "Para principiantes",
    hintFaq: "Preguntas frecuentes (en inglés)",
    section: "Sección",
    // 页脚里 {apple} 那个链接上的字
    appleLink: "Soporte técnico de Apple",
    // {apple} 和 {github} 会换成链接。独立声明和商标归属照 Apple 的商标指南写，意思一句都不能少（见 docs/MAINTAINING.md「商标」）
    foot: "Regiones de la Cuenta de Apple, para principiantes es una guía independiente y no ha sido autorizada, patrocinada ni aprobada de ningún otro modo por Apple Inc. No habla en nombre de Apple. Apple, App Store e iCloud son marcas comerciales de Apple Inc. Las normas sobre cuentas, pagos y regiones cambian: la referencia son el {apple} y los términos de Apple. El código de esta guía y el sitio para dejar comentarios están en {github}.",
    // 顶栏「外观」面板（UI Kit 的外观设置组）
    appearance: {
      group: "Apariencia", theme: "Tema", light: "Claro", dark: "Oscuro", system: "Sistema",
      corners: "Esquinas redondeadas", cornersDesc: "Si lo desactivas, todas las esquinas quedan rectas",
      accent: "Color de acento", accentDesc: "Se usa en botones, selección y foco",
    },
  },

  home: {
    h1: "Una cuenta de otra región, sin tocar la tuya de siempre",
    // lead：前半句、荧光笔那一句、后半句
    lead: ["Para quienes viven en China continental y quieren una Cuenta de Apple de EE. UU. o de Turquía: la app que te recomendaron no está en el App Store de China continental, o el servicio que buscas no se ofrece allí. Esta web explica qué decide el país o la región de una cuenta, cómo funcionan los procesos de la propia Apple para registrarte, pagar y cambiar de región, cómo iniciar sesión en el App Store con una segunda cuenta mientras iCloud sigue siendo tuyo, y qué hacer con las suscripciones, las tarjetas regalo y las cuentas bloqueadas. ", "Es una guía no oficial y de código abierto", ", sin relación con Apple, que no habla en nombre de Apple y que no es asesoramiento legal."],
    cta: ["Empieza aquí si es tu primera vez", "Ir a la guía completa (en inglés)"],
    ctaNote: "Para principiantes hay tres lecciones: qué decide la región de una cuenta, por qué iCloud y el App Store son dos inicios de sesión distintos, y por qué una segunda cuenta es más sencilla que cambiar de región la principal.",
    painH: "¿Te ha pasado algo así?",
    PAIN: [
      "Te recomendaron una app y, por más que la buscas, no aparece en tu App Store de China continental.",
      "Quieres cambiar el App Store a una cuenta de otra región, pero te da miedo tocar el Cerrar sesión equivocado y perder las fotos y los contactos de tu iCloud.",
      "Cada tutorial dice una cosa distinta sobre la dirección, el método de pago y si hay que cambiar de región la cuenta principal, y no sabes a cuál creer.",
    ],
    lessonsH: "Para empezar bastan tres lecciones",
    lessonsP: "Léelas en orden; son unos 25 minutos en total. Al terminar sabrás qué decide la región de una cuenta y qué dicen de ella los términos de Apple, por qué iCloud se queda siempre con tu propia cuenta mientras que la de otra región va solo en Contenido y compras, y por qué una segunda cuenta es más sencilla que cambiar de región la principal. Todo lo demás de la web está ahí para consultarlo cuando lo necesites.",
    lessonsLabel: "Para principiantes: 3 lecciones",
    fitH: "¿Es para ti?", yesH: "Sí, si", noH: "Esta web no enseña",
    YES: ["Vives en China continental y tienes tu propia Cuenta de Apple de China continental", "Quieres una app o un servicio que solo tiene la tienda de EE. UU. o la de Turquía, y te parece bien seguir los procesos de la propia Apple", "Quieres entender las normas antes de decidir si te registras y cómo pagas"],
    NO: ["Direcciones concretas, ni cómo inventarse una", "Configuración de red: VPN, proxies, nodos", "Cuentas compartidas, compradas o prestadas", "Trucos con la diferencia de precios: suscribirse en la región barata, compartir planes, revender"],
    tracksH: "Qué cubre esta web",
    tracksP: "Las lecciones para principiantes explican las ideas; después, la guía completa te lleva paso a paso.",
    // 完整教程只有英文和中文
    devNote: "De momento, la guía completa está en inglés (y en chino).",
    // TRACKS：每个是 [标题, 说明]，图标、顺序和对应的教程步骤固定（在 views/Home.astro 的 TRACK_BASE）
    TRACKS: [
      ["Crea una cuenta en otra región", "Ten claro para qué la quieres, prepara una dirección de correo electrónico y un número de teléfono, elige el país o la región adecuados y paga con lo que Apple indica para esa región."],
      ["Úsala solo en Contenido y compras", "Cambia el App Store a la cuenta de otra región, descarga y actualiza, y vuelve a la tuya, con iCloud siempre en tu propia cuenta."],
      ["Suscripciones y seguridad de la cuenta", "Dónde se gestionan las suscripciones y cómo te avisa Apple de una subida de precio; si la cuenta se bloquea o se rechaza una compra, acude a Apple, y no compres, pidas prestadas ni compartas cuentas."],
    ],
    tracksLabel: "Los pasos correspondientes de la guía completa",
    // 每件事下面链到完整教程的一步：{n} 是第几步，{title} 是那一步的标题（英文）
    stepLink: "Paso {n}: {title}",
  },

  // 新手入门三课在导航、首页路线图里的标题、时间、简介（顺序：1 地区管什么、2 两个登录位、3 另注册一个）
  lessons: [
    { title: "Qué decide la región de una cuenta", minutes: "8 minutos", sum: "La región decide qué apps tiene la tienda, en qué moneda salen los precios y cómo puedes pagar; los términos de Apple la vinculan al lugar donde vives" },
    { title: "iCloud y el App Store son dos inicios de sesión distintos", minutes: "8 minutos", sum: "Deja tu propia cuenta en iCloud e inicia sesión con la cuenta de otra región solo en Contenido y compras; nunca pongas en iCloud la cuenta de otra persona" },
    { title: "Crea una segunda cuenta y deja la principal como está", minutes: "8 minutos", sum: "Cambiar de región la cuenta principal obliga a resolver antes el saldo, las suscripciones y En familia, y el iCloud de una cuenta de China continental sale de GCBD; con una segunda cuenta es más sencillo" },
  ],

  // 一课的页面框架
  lesson: {
    eyebrow: "Para principiantes · lección {n} de {total}",
    prog: "Progreso: lección {n} de {total}",
    nav: "Lección anterior y siguiente",
    prev: "Anterior",
    next: "Siguiente",
    pending: "Siguiente (en preparación)",
    title: "Lección {n}: {title}",
    tldr: "En una frase",
  },

  // 正文里用到的组件
  comp: {
    callout: { ok: "Deberías ver", warn: "Atención", no: "No hagas esto", tip: "Consejo" },
    copyTitle: "Copia esto",
    copy: "Copiar",
    cmdDone: "Comando copiado",
    cmdLabel: "Copiar el comando: {c}",
    reply: "Ilustración: más o menos lo que verás",
    // 每页末尾一行：{lead} {gh 链接}{faq[0]}{faq[1] 链接}{faq[2]}。点开的 issue 模板用英文（维护者看得懂）
    feedback: {
      lead: "¿Algo de esta página no se entiende, o no te ha funcionado tal como se explica?",
      gh: "Coméntalo en GitHub",
      faq: [". O consulta antes las ", "preguntas frecuentes", "."],
    },
    // 首页、常见问题末尾的「提问和讨论」卡片
    contact: {
      h: "Preguntas y debate",
      p: "¿Te has atascado en un paso, hay algo que no está claro o te aparece un mensaje de error que la guía no cubre? Llévalo a GitHub. Las preguntas que más se repiten acaban incorporándose a la guía.",
      faq: ["Antes de preguntar, mira las ", "preguntas frecuentes", ": muchas respuestas ya están ahí."],
      btn: "Pregunta o comenta en GitHub",
      x: "Quien escribe la guía está en X",
      privacy: "Antes de enviar capturas de pantalla, tapa el correo de tu Cuenta de Apple, tu número de teléfono, los códigos de tarjetas o tarjetas regalo, los números de pedido y tu nombre.",
    },
  },

  // 新手三课里的图示：界面文字和每张图的文字，结构照 src/data/figs.js 里那张图的 en
  figs: {
    ui: { label: "Diagrama", replay: "Ver otra vez" },
    "l2-two-sign-outs": {
      a: {
        who: "Cerrar sesión al final de [tu nombre]",
        steps: ["Ajustes → tu nombre → desplázate hasta el final", "Toca Cerrar sesión"],
        end: "Cierra a la vez la sesión de iCloud, el App Store, iMessage y FaceTime",
      },
      b: {
        who: "Cerrar sesión en Contenido y compras",
        steps: ["Ajustes → tu nombre", "Contenido y compras → Cerrar sesión", "¿No es [tu nombre]? → la cuenta de otra región"],
        end: "Solo cambia la cuenta con la que compras; iCloud sigue siendo tuyo",
      },
      cap: "Los dos botones dicen Cerrar sesión. Para cambiar la cuenta del App Store, usa el de Contenido y compras.",
    },
    "l3-before-change": {
      layers: [
        { t: "Gasta el saldo", d: "¿Te queda menos de lo que cuesta un artículo? El soporte de Apple puede dejarlo a cero" },
        { t: "Cancela las suscripciones y espera", d: "Cancela las que bloquean el cambio y deja que termine el periodo" },
        { t: "Espera a que termine lo pendiente", d: "Membresías, reservas, alquileres, pases de temporada, reembolsos" },
        { t: "Revisa En familia", d: "Si eres miembro de un grupo, es posible que no puedas cambiar" },
        { t: "Ten un método de pago de la nueva región", d: "Es posible que tengas que introducir uno válido" },
        { t: "Descarga antes tu contenido", d: "Algunos contenidos pueden no estar disponibles en la nueva región" },
        { t: "Cuentas de China continental: iCloud sale de GCBD", d: "Una vez migrado, GCBD borra su copia" },
      ],
      cap: "Resuelve todo esto antes de cambiar de región tu cuenta principal; lo último solo afecta a las cuentas de China continental. Con una segunda cuenta te lo ahorras todo.",
    },
  },
};

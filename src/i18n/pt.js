// pt（Português do Brasil，照 Apple 的 pt-br 用 você）：结构照 base.js（英文底稿）。缺的键会显示英文。
// 按钮名和术语照 Apple 支持的 pt-br 文章（docs/sources/raw/official/support-pt/）。{名字} 是占位，由 fmt() 换成值，翻译时原样保留。
// 这些语言只有首页和新手入门三课；完整教程、How-to、Wiki、常见问题链到英文版，所以导航里写明「英文」。
export default {
  ui: {
    brand: "Regiões da Conta Apple, para iniciantes",
    desc: "Um guia não oficial sobre os países e regiões da Conta Apple: o que a região decide, como criar uma conta dos EUA ou da Turquia e pagar com ela, como iniciar sessão na App Store com outra conta sem mexer no iCloud, e o que observar ao mudar de região ou fazer uma assinatura.",
    skip: "Pular para o conteúdo",
    menu: "Abrir menu",
    search: "Buscar no guia",
    searchPh: "Busque lições, passos, how-tos, termos, perguntas…",
    searchEmpty: "Nada encontrado. Tente outra palavra",
    look: "Aparência",
    lang: "Idioma",
    repo: "Este guia no GitHub",
    repoMore: "Mais: Suporte da Apple",
    repoDefault: "Padrão",
    // 两个链接：[名字, 一句说明]，顺序固定（本教程、Apple 支持）
    repos: [
      ["Este guia", "Não oficial e sem vínculo com a Apple; mande seus comentários aqui"],
      ["Suporte da Apple", "A referência para as regras de conta, pagamento e região"],
    ],
    navLabel: "Navegação do site",
    start: "Começar",
    home: "Início",
    lessons: "Para iniciantes: comece aqui",
    more: "Mais (em inglês)",
    main: "Guia completo: passo a passo",
    howto: "How-to: como fazer",
    wiki: "Wiki: o que é cada coisa",
    faq: "Perguntas frequentes",
    toc: "Nesta página",
    tocLabel: "Nesta página",
    hintMain: "Guia completo (em inglês)",
    hintLesson: "Para iniciantes",
    hintFaq: "Perguntas frequentes (em inglês)",
    section: "Seção",
    // 页脚里 {apple} 那个链接上的字
    appleLink: "Suporte da Apple",
    // {apple} 和 {github} 会换成链接。独立声明和商标归属照 Apple 的商标指南写，意思一句都不能少（见 docs/MAINTAINING.md「商标」）
    foot: "Regiões da Conta Apple, para iniciantes é um guia independente e não foi autorizado, patrocinado nem aprovado de nenhuma outra forma pela Apple Inc. Ele não fala em nome da Apple. Apple, App Store e iCloud são marcas comerciais da Apple Inc. As regras de conta, pagamento e região mudam: a referência são o {apple} e os termos da Apple. O código deste guia e o espaço para comentários estão no {github}.",
    // 顶栏「外观」面板（UI Kit 的外观设置组）
    appearance: {
      group: "Aparência", theme: "Tema", light: "Claro", dark: "Escuro", system: "Sistema",
      corners: "Cantos arredondados", cornersDesc: "Se desativar, todos os cantos ficam retos",
      accent: "Cor de destaque", accentDesc: "Usada em botões, seleção e foco",
    },
  },

  home: {
    h1: "Uma conta de outra região, sem mexer na sua principal",
    // lead：前半句、荧光笔那一句、后半句
    lead: ["Para quem mora na China continental e quer uma Conta Apple dos EUA ou da Turquia: o app que indicaram para você não está na App Store da China continental, ou o serviço que você quer não é oferecido lá. Este site explica o que o país ou região de uma conta decide, como funcionam os processos da própria Apple para cadastro, pagamento e mudança de região, como iniciar sessão na App Store com uma segunda conta enquanto o iCloud continua sendo seu, e o que fazer com assinaturas, cartões-presente e contas bloqueadas. ", "Este é um guia não oficial e de código aberto", ", sem vínculo com a Apple, que não fala em nome da Apple e que não é aconselhamento jurídico."],
    cta: ["Comece aqui se é a sua primeira vez", "Ir para o guia completo (em inglês)"],
    ctaNote: "Para iniciantes são três lições: o que a região de uma conta decide, por que o iCloud e a App Store são dois logins separados, e por que uma segunda conta é mais simples do que mudar a região da principal.",
    painH: "Já aconteceu com você?",
    PAIN: [
      "Indicaram um app para você e, por mais que você procure, ele não aparece na sua App Store da China continental.",
      "Você quer trocar a App Store para a conta de outra região, mas tem medo de tocar no Finalizar Sessão errado e perder as fotos e os contatos do seu iCloud.",
      "Cada tutorial diz uma coisa diferente sobre o endereço, a forma de pagamento e se é preciso mudar a região da conta principal, e você não sabe em qual acreditar.",
    ],
    lessonsH: "Para começar, bastam três lições",
    lessonsP: "Leia na ordem; são uns 25 minutos no total. No fim, você vai saber o que a região de uma conta decide e o que os termos da Apple dizem sobre ela, por que o iCloud fica sempre na sua própria conta enquanto a conta de outra região entra só em Mídia e Compras, e por que uma segunda conta é mais simples do que mudar a região da principal. Todo o resto do site está aí para consultar quando você precisar.",
    lessonsLabel: "Para iniciantes: 3 lições",
    fitH: "É para você?", yesH: "Sim, se", noH: "Este site não ensina",
    YES: ["Você mora na China continental e tem a sua própria Conta Apple da China continental", "Você quer um app ou serviço que só a loja dos EUA ou da Turquia tem, e não se importa de seguir os processos da própria Apple", "Você quer entender as regras antes de decidir se vai se cadastrar e como vai pagar"],
    NO: ["Endereços específicos, ou como inventar um", "Configuração de rede: VPN, proxies, nós", "Contas compartilhadas, compradas ou emprestadas", "Truques com diferença de preço: assinar na região barata, dividir planos, revender"],
    tracksH: "O que este site cobre",
    tracksP: "As lições para iniciantes explicam as ideias; depois, o guia completo leva você passo a passo.",
    // 完整教程只有英文和中文
    devNote: "Por enquanto, o guia completo está em inglês (e em chinês).",
    // TRACKS：每个是 [标题, 说明]，图标、顺序和对应的教程步骤固定（在 views/Home.astro 的 TRACK_BASE）
    TRACKS: [
      ["Crie uma conta em outra região", "Saiba para que você quer a conta, tenha à mão um endereço de e-mail e um número de telefone, escolha o país ou região certo e pague com o que a Apple lista para essa região."],
      ["Use só em Mídia e Compras", "Troque a App Store para a conta de outra região, baixe e atualize, depois volte para a sua, com o iCloud na sua própria conta o tempo todo."],
      ["Assinaturas e segurança da conta", "Onde gerenciar as assinaturas e como a Apple avisa sobre um aumento de preço; se a conta for bloqueada ou uma compra for recusada, procure a Apple, e não compre, pegue emprestado nem compartilhe contas."],
    ],
    tracksLabel: "Os passos correspondentes no guia completo",
    // 每件事下面链到完整教程的一步：{n} 是第几步，{title} 是那一步的标题（英文）
    stepLink: "Passo {n}: {title}",
  },

  // 新手入门三课在导航、首页路线图里的标题、时间、简介（顺序：1 地区管什么、2 两个登录位、3 另注册一个）
  lessons: [
    { title: "O que a região de uma conta decide", minutes: "8 minutos", sum: "A região decide quais apps a loja tem, em que moeda aparecem os preços e como você pode pagar; os termos da Apple ligam a região ao lugar onde você mora" },
    { title: "iCloud e App Store são dois logins separados", minutes: "8 minutos", sum: "Deixe a sua própria conta no iCloud e inicie sessão com a conta de outra região só em Mídia e Compras; nunca coloque a conta de outra pessoa no iCloud" },
    { title: "Crie uma segunda conta e deixe a principal como está", minutes: "8 minutos", sum: "Mudar a região da conta principal exige resolver antes o saldo, as assinaturas e o Compartilhamento Familiar, e o iCloud de uma conta da China continental sai do GCBD; uma segunda conta é mais simples" },
  ],

  // 一课的页面框架
  lesson: {
    eyebrow: "Para iniciantes · lição {n} de {total}",
    prog: "Progresso: lição {n} de {total}",
    nav: "Lição anterior e próxima",
    prev: "Anterior",
    next: "Próxima",
    pending: "Próxima (em preparação)",
    title: "Lição {n}: {title}",
    tldr: "Em uma frase",
  },

  // 正文里用到的组件
  comp: {
    callout: { ok: "Você deve ver", warn: "Atenção", no: "Não faça isso", tip: "Dica" },
    copyTitle: "Copie isto",
    copy: "Copiar",
    cmdDone: "Comando copiado",
    cmdLabel: "Copiar o comando: {c}",
    reply: "Ilustração: mais ou menos o que você vai ver",
    // 每页末尾一行：{lead} {gh 链接}{faq[0]}{faq[1] 链接}{faq[2]}。点开的 issue 模板用英文（维护者看得懂）
    feedback: {
      lead: "Alguma coisa nesta página ficou confusa ou não funcionou como está escrito?",
      gh: "Conte no GitHub",
      faq: [". Ou veja antes as ", "perguntas frequentes", "."],
    },
    // 首页、常见问题末尾的「提问和讨论」卡片
    contact: {
      h: "Perguntas e discussão",
      p: "Travou em algum passo, achou algo confuso ou apareceu uma mensagem de erro que o guia não cobre? Leve para o GitHub. As perguntas que mais aparecem acabam entrando no guia.",
      faq: ["Antes de perguntar, veja as ", "perguntas frequentes", ": muitas respostas já estão lá."],
      btn: "Pergunte ou comente no GitHub",
      x: "Quem escreve o guia está no X",
      privacy: "Antes de mandar prints, esconda o e-mail da sua Conta Apple, o número de telefone, os códigos de cartões ou cartões-presente, os números de pedido e o seu nome.",
    },
  },

  // 新手三课里的图示：界面文字和每张图的文字，结构照 src/data/figs.js 里那张图的 en
  figs: {
    ui: { label: "Diagrama", replay: "Ver de novo" },
    "l2-two-sign-outs": {
      a: {
        who: "Finalizar Sessão no fim de [seu nome]",
        steps: ["Ajustes → seu nome → role até o fim", "Toque em Finalizar Sessão"],
        end: "Finaliza de uma vez a sessão do iCloud, da App Store, do iMessage e do FaceTime",
      },
      b: {
        who: "Finalizar Sessão em Mídia e Compras",
        steps: ["Ajustes → seu nome", "Mídia e Compras → Finalizar Sessão", "Não é [seu nome]? → a conta de outra região"],
        end: "Só muda a conta com que você compra; o iCloud continua sendo seu",
      },
      cap: "Os dois botões dizem Finalizar Sessão. Para trocar a conta da App Store, use o de Mídia e Compras.",
    },
    "l3-before-change": {
      layers: [
        { t: "Gaste o saldo", d: "Sobrou menos do que o preço de um item? O Suporte da Apple pode zerar" },
        { t: "Cancele as assinaturas e espere", d: "Cancele as que impedem a alteração e deixe o período terminar" },
        { t: "Espere os itens pendentes", d: "Associações, pré-vendas, aluguéis, Passes de Temporada, reembolsos" },
        { t: "Verifique o Compartilhamento Familiar", d: "Quem faz parte de um grupo talvez não consiga alterar" },
        { t: "Tenha um método de pagamento da nova região", d: "Talvez seja necessário inserir um válido" },
        { t: "Baixe o seu conteúdo antes", d: "Alguns conteúdos podem não estar disponíveis na nova região" },
        { t: "Contas da China continental: o iCloud sai do GCBD", d: "Depois da migração, o GCBD apaga a cópia dele" },
      ],
      cap: "Resolva tudo isso antes de mudar a região da sua conta principal; o último item vale só para contas da China continental. Uma segunda conta dispensa tudo isso.",
    },
  },
};

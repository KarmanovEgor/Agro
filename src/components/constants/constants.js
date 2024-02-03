const partnersData = [
  {
    link: "https://azpaley.ru/",
    image: require("../../images/aleisk.png"),
    alt: "Алейскзернопродукт",
  },
  {
    link: "https://www.amurbroiler.ru/",
    image: require("../../images/amur.jpeg"),
    alt: "амурский бройлер",
  },
  {
    link: "https://www.vlmk.spb.ru/",
    image: require("../../images/velikkomb.png"),
    alt: "Великолукский агропромышленный холдинг",
  },
  {
    link: "https://oao-volganin.ru/",
    image: require("../../images/Volganin.png"),
    alt: "Волжанин",
  },
  {
    link: "http://galichskoe.ru/",
    image: require("../../images/galich.png"),
    alt: "Галичское",
  },
  {
    link: "https://merciagro.ru/",
    image: require("../../images/merciagro.png"),
    alt: "Мерси Агро Приморье",
  },
  {
    link: "https://www.zpfrk.ru/",
    image: require("../../images/zeleneck.png"),
    alt: "Птицефабрика Зеленецкая",
  },
  {
    link: "https://pskovagro.ru/",
    image: require("../../images/pskovagro.jpeg"),
    alt: "pskovagro",
  },
  {
    link: "http://www.sv-ovo.ru/",
    image: require("../../images/sverdlov.png"),
    alt: "Птицефабрика Свердловская",
  },
  {
    link: "http://chepfa.ru/",
    image: require("../../images/chelyabinsk.png"),
    alt: "Птицефабрика Челябинская",
  },
  {
    link: "https://www.rusagrogroup.ru/ru/",
    image: require("../../images/rusagro.png"),
    alt: "Русагро",
  },
  {
    link: "http://skhp-ural.ru/",
    image: require("../../images/sverdComb.png"),
    alt: "Свердловский комбинат хлебопродуктов",
  },
  {
    link: "https://ushpk.ru/",
    image: require("../../images/usol.png"),
    alt: "УСОЛЬСКИЙ СВИНОКОМПЛЕКС",
  },
  {
    link: "https://kdv-group.com/ru",
    image: require("../../images/kdv.png"),
    alt: "KDV",
  },
  {
    link: "https://belyaevskaya.ru/",
    image: require("../../images/belyaevskay.png"),
    alt: "Беляевская",
  },
  {
    link: "https://www.omskprod55.ru/",
    image: require("../../images/omskprod.png"),
    alt: "Омское продовольствие",
  },
  {
    link: "https://melnik.n4.biz/",
    image: require("../../images/melnik.gif"),
    alt: "ОАО Мельник",
  },
];

const promoContent = {
  "/": {
    className: "promo__rus",
    text: "Закупаем и реализуем зерновые, масличные и бобовые культуры",
    button: "СВЯЗАТЬСЯ С НАМИ",
  },
  "/ru": {
    className: "promo__rus",
    text: "Закупаем и реализуем зерновые, масличные и бобовые культуры",
    button: "СВЯЗАТЬСЯ С НАМИ",
  },
  "/zh": {
    className: "promo__china",
    text: "我们采购和销售谷物、油料和豆类作物",
    button: "联系我们",
  },
  "/en": {
    className: "promo__english",
    text: "We purchase and sell grain, oilseed, and leguminous crops.",
    button: "CONTACT US",
  },
};
const headerContent = {
  "/": {
    textDoc: "Документы",
    textCont: "Контакты",
  },
  "/ru": {
    textDoc: "Документы",
    textCont: "Контакты",
  },
  "/zh": {
    textDoc: "文件",
    textCont: "联系方式",
  },
  "/en": {
    textDoc: "Documents",
    textCont: "Contacts",
  },
};

const aboutContent = {
  "/": {
    title: "О нас",
    text: "ООО «Агро» ведет свою деятельность с 2015 года, активно занимается куплей-продажей сельскохозяйственных культур. Наша компания реализует сельхозпродукцию на внутреннем рынке России и предлагает сотрудничество в страны СНГ и дальнего зарубежья. Мы дорожим каждым из наших партнеров и всегда оперативно реагируем на все вопросы, возникающие в процессе работы!",
  },
  "/zh": {
    title: "关于我们",
    text: "АО 'Агро' 自2015年以来开展业务, 积极从事农产品的购销活动。我们公司在俄罗斯国内市场销售农产品，并提供与独联体国家和远东国家的合作机会。我们珍视我们的每一位合作伙伴，并始终及时回应工作过程中出现的所有问题！",
  },
  "/en": {
    title: "About us",
    text: "LLC 'Agro' has been operating since 2015, actively engaged in the purchase and sale of agricultural crops. Our company sells agricultural products on the domestic market of Russia and offers cooperation to the CIS countries and distant foreign countries. We value each of our partners and always respond promptly to all questions that arise during the work process!",
  },
};

aboutContent["/ru"] = aboutContent["/"];

const partnersContent = {
  "/": {
    title: "Наши партнеры",
  },
  "/ru": {
    title: "Наши партнеры",
  },
  "/zh": {
    title: "我们的合作伙伴",
  },
  "/en": {
    title: "Our Partners",
  },
};
const footerContent = {
  "/": {
    title: "Российская Федерация, Алтайский край, ",
    city: "г. Барнаул",
    text: "Контакты",
    job: "Генеральный директор",
    name: "Чёрный Роман Анатольевич",
  },
  "/ru": {
    title: "Российская Федерация, Алтайский край, ",
    city: "г. Барнаул",
    text: "Контакты",
    job: "",
    name: "Чёрный Роман Анатольевич",
  },
  "/zh": {
    title: "俄罗斯联邦, 阿尔泰边疆区，",
    city: "巴尔瑙尔市",
    text: "联系方式 ",
    job: "总裁",
    name: "Chernyy Roman Anatolyevich",
  },
  "/en": {
    title: "Russian Federation, Altai Krai, ",
    city: "Barnaul",
    text: "Contacts",
    job: "Chief Executive Officer (CEO)",
    name: "Chernyy Roman Anatolyevich",
  },
};

const contactsContent = {
  "/contacts": {
    mail: "Написать на почту",
    phone: "Выполнить звонок",
    wahtsapp: "Перейти в WhatsApp",
    telega: "Перейти в Telegram",
  },
  "/contacts/ru": {
    mail: "Написать на почту",
    phone: "Выполнить звонок",
    wahtsapp: "Перейти в WhatsApp",
    telega: "Перейти в Telegram",
  },
  "/contacts/zh": {
    mail: "写电子邮件",
    phone: "打电话",
    wahtsapp: "转到WhatsApp",
    telega: "转到Telegram",
  },
  "/contacts/en": {
    mail: "Write an email",
    phone: "Make a call",
    wahtsapp: "Go to WhatsApp",
    telega: "Go to Telegram",
  },
  
};
const docsContent = {
    "/documents": {
      doc: "Документы",

    },
    "/documents/ru": {
    doc: "Документы",

    },
    "/documents/zh": {
   doc: "文件",

    },
    "/documents/en": {
      doc: "Documents",

    },
  };
  const contactsEmployees = [
    {
      lastname: "ЧЁРНАЯ",
      name: "Елена Георгиевна",
      emproy: "Коммерческий Директор",
      mailPerson: "chernaya.eg1985@gmail.com",
      telphone: "+7 (960) 964-33-77",
      image: require("../../images/fd.png"),
    },
    {
      lastname: "ЧЁРНЫЙ",
      name: "Роман Анатольевич",
      emproy: "Генеральный Директор",
      mailPerson: "",
      telphone: "+7 (913) 224-17-89",
      image: require("../../images/gd.png"),
    },
    {
      lastname: "МОРДОВИНА",
      name: "Елена Николаевна",
      emproy: "Менеджер",
      mailPerson: "mordovina_agro@mail.ru",
      telphone: "+7 (903) 990-87-44",
      image: require("../../images/m1.png"),
    },
    {
      lastname: "ПОЛИНА",
      name: "Виктория Александровна",
      emproy: "Менеджер",
      mailPerson: "vika.polina.71@list.ru",
      telphone: "+7 (960) 964-33-77",
      image: require("../../images/m2.png"),
    },

  ]

const routes = ["/documents", "/contacts"];
const languages = ["ru", "zh", "en"];

routes.forEach((route) => {
  footerContent[route] = footerContent["/ru"];
  headerContent[route] = headerContent["/ru"];

  languages.forEach((lang) => {
    footerContent[`${route}/${lang}`] = footerContent[`/${lang}`];
    headerContent[`${route}/${lang}`] = headerContent[`/${lang}`];
  });
});

export {
  partnersData,
  promoContent,
  headerContent,
  aboutContent,
  partnersContent,
  footerContent,
  contactsContent,
  docsContent,
  contactsEmployees
};

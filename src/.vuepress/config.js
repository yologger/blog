const routes = [
  "01_java",
  "02_kotlin",
  "20_android",
  "30_spring",
  "50_infra_devops",
  "55_db",
  "60_cs",
  "80_more",
];

const createSidebar = () => {
  const sidebar = {};
  for (const route of routes) {
    Object.assign(sidebar, require("../post/" + route));
  }
  return sidebar;
};

module.exports = {
  base: "/blog/",
  title: "Yologger's Blog",
  description: "yologger's blog",
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
    ["link", { rel: "icon", href: "/favicon.ico" }], // Favicon
  ],
  markdown: {
    // options for markdown-it-anchor
    // anchor: { permalink: false },
    // options for markdown-it-toc
    // extractHeaders: ["h2", "h3", "h4"],
    toc: { includeLevel: [2, 3, 4] },
    extendMarkdown: (md) => {
      // use more markdown-it plugins!
      // md.use(taskLists, {enabled: true})
      // md.use(require("markdown-it-task-lists"));
    },
  },
  themeConfig: {
    logo: "/logo.jpg",
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [ 
      {
        text: "Programming",
        items: [
          { text: "Java", link: "/post/01_java/" },
          { text: "Kotlin", link: "/post/02_kotlin/" },
        ]
      },
      { text: "Spring", link: "/post/30_spring/" },
      { text: "Android", link: "/post/20_android/" },
      { text: "Infra/DevOps", link: "/post/50_infra_devops/" },
      { text: "DB", link: "/post/55_db/" },
      { text: "CS", link: "/post/60_cs/" },
      { text: "More", link: "/post/80_more/" },
      { text: "Github", link: "https://github.com/yologger" },
    ],
    
    sidebar: createSidebar(),
  },
  plugins: [
    "@vuepress/back-to-top",
    "@vuepress/nprogress",
    "@vuepress/plugin-medium-zoom",
    // "vuepress-plugin-code-copy",
    'vuepress-plugin-mathjax',
    {
      target: 'svg',
      macros: {
        '*': '\\times',
      },
    },
  ],
};

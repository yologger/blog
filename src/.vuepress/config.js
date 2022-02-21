const routes = [
  "10_java",
  "11_kotlin",
  "20_android",
  "30_spring",
  "50_infra_devops",
  // "51_git_github",
  // "52_linux",
  // "53_docker",
  // "54_kubernetes",
  "60_algorithm",
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
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    ["link", { rel: "icon", href: "/favicon.ico" }], // Favicon
  ],
  markdown: {
    // options for markdown-it-anchor
    // anchor: { permalink: false },
    // options for markdown-it-toc
    extractHeaders: ["h2", "h3", "h4"],
    // toc: { includeLevel: [] },
    extendMarkdown: (md) => {
      // use more markdown-it plugins!
      // md.use(taskLists, {enabled: true})
      md.use(require("markdown-it-task-lists"));
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
      { text: "Java", link: "/post/10_java/" },
      { text: "Kotlin", link: "/post/11_kotlin/" },
      // {
      //   text: "Programming",
      //   items: [
      //     { text: "Java", link: "/post/10_java/" },
      //     { text: "Kotlin", link: "/post/11_kotlin/" },
      //   ]
      // },
      { text: "Android", link: "/post/20_android/" },
      { text: "Spring", link: "/post/30_spring/" },
      { text: "Infra/DevOps", link: "/post/50_infra_devops/" },
      // {
      //   text: "Infra/DevOps",
      //   items: [
      //     { text: "Git/GitHub", link: "/post/51_git_github/" },
      //     { text: "Linux", link: "/post/52_linux/" },
      //     { text: "Docker", link: "/post/53_docker/" },
      //     { text: "Kubernetes", link: "/post/54_kubernetes/" },
      //   ],
      // },
      { text: "Algorithm", link: "/post/60_algorithm/" },
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
  ],
};

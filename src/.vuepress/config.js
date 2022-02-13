const routes = [
  "01_java",
  "02_kotlin",
  "04_android",
  "05_spring",
  "10_git_github",
  // "30_homebrew",
  // "31_maven",
  // "32_gradle",
];

const createSidebar = () => {
  const sidebar = {};
  for (const route of routes) {
    Object.assign(sidebar, require("../post/" + route));
  }
  return sidebar;
};

module.exports = {
  // base: '/en/',
  title: "Yologger's Blog",
  description: "yologger's blog",
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    // Favicon
    ["link", { rel: "icon", href: "/favicon.ico" }],
  ],
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
        ],
      },
      { text: "Android", link: "/post/04_android/" },
      { text: "Spring", link: "/post/05_spring/" },
      {
        text: "DevOps",
        items: [
          { text: "Git/GitHub", link: "/post/10_git_github/" },
          { text: "Maven", link: "/post/31_maven/" },
          { text: "Gradle", link: "/post/32_gradle/" },
        ],
      },
      // {
      //   text: "Etc",
      //   items: [
      //     { text: "Homebrew", link: "/post/30_homebrew/" },
      //     { text: "Maven", link: "/post/31_maven/" },
      //     { text: "Gradle", link: "/post/32_gradle/" },
      //   ],
      // },
      { text: "Github", link: "https://github.com/yologger" },
    ],
    sidebar: createSidebar(),
  },
  plugins: [
    "@vuepress/back-to-top",
    "@vuepress/nprogress",
    "@vuepress/plugin-medium-zoom",
    "vuepress-plugin-code-copy",
  ],
};

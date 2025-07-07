import { defineConfig } from 'vitepress'
import { defineTeekConfig } from "vitepress-theme-teek/config";

const description = [
  "欢迎来到 HR 金种子",
  "全国首个专注 HR 在校生培养的公益项目",
].toString();

const teekConfig = defineTeekConfig({
  author: { name: "HR 金种子" },
  blogger: {
    avatar: "/hr.png",
    shape: "circle-rotate",
    name: "HR 金种子",
    slogan: "全国首个专注 HR 在校生培养的公益项目",
    circleBgImg: "/blog/bg1.jpg",
    color: "#ffffff",
  },
  footerInfo: {
    theme: {
      name: `HR 金种子公益计划`,
    },
    copyright: {
      createYear: 2024,
      suffix: "hrjzz",
    },
  },
  codeBlock: {
    copiedDone: TkMessage => TkMessage.success("复制成功！"),
  },
  post: {
    showCapture: true,
  },
  articleShare: { enabled: true },
  vitePlugins: {
    sidebarOption: {
      initItems: false,
    },
  },
  siteAnalytics: [
    {
      provider: "baidu",
      options: {
        id: "d5ee872d9aa1ef8021f4a3921b2e9c2a",
      },
    },
    {
      provider: "google",
      options: {
        id: "G-K5GNDW3L7K",
      },
    },
  ],
  articleUpdate: {
    enabled: false
  }
});

export default defineConfig({
  extends: teekConfig,
  title: "HR 金种子公益计划",
  description: "向阳而生",
  lastUpdated: true,
  lang: "zh-CN",
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/star.svg" }],
    ["link", { rel: "icon", type: "image/png", href: "/star.png" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "zh-CN" }],
    ["meta", { property: "og:title", content: "HR 金种子公益计划" }],
    ["meta", { property: "og:site_name", content: "向阳而生" }],
    ["meta", { property: "og:image", content: "" }],
    ["meta", { property: "og:url", content: "" }],
    ["meta", { property: "og:description", description }],
    ["meta", { name: "description", description }],
    ["meta", { name: "author", content: "HR 金种子公益计划" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
      },
    ],

    ["meta", { name: "keywords", description }],
    ["meta", { name: "baidu-site-verification", content: "codeva-GdK2q9MO1i" }],
    ["meta", { name: "msvalidate.01", content: "48CABE70F538B8D117567176ABF325AF" }],
    ["script", { charset: "UTF-8", id: "LA_COLLECT", src: "//sdk.51.la/js-sdk-pro.min.js" }],
    [
      "script",
      {},
      `typeof LA !== 'undefined' && LA.init({ id: "3LqfP8Icg0GeEvtn", ck: "3LqfP8Icg0GeEvtn", hashMode: true })`,
    ],
  ],
  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true,
    },
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
  },
  sitemap: {
    hostname: "https://hrjzz.github.io",
    transformItems: items => {
      const permalinkItemBak: typeof items = [];
      const permalinks = (globalThis as any).VITEPRESS_CONFIG.site.themeConfig.permalinks;
      items.forEach(item => {
        const permalink = permalinks?.map[item.url];
        if (permalink) permalinkItemBak.push({ url: permalink, lastmod: item.lastmod });
      });
      return [...items, ...permalinkItemBak];
    },
  },
  themeConfig: {
    logo: "/star.svg",
    darkModeSwitchLabel: "主题",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    lastUpdatedText: "上次更新时间",
    outline: {
      level: [2, 4],
      label: "本页导航",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    nav: [
      { text: "首页", link: "/" },
      { text: "课程", link: "/course/plan", activeMatch: "/30.课程/" },
      { text: "读书", link: "/read/plan", activeMatch: "/20.读书/" },
      { text: "游学", link: "/study/plan", activeMatch: "/40.游学/" },
      { text: "行路", link: "/activity/plan", activeMatch: "/10.活动/" },
      { text: "茶话会", link: "/tea/1/1", activeMatch: "/05.茶话会/" },
      { text: "关于我们", link: "/about/intro", activeMatch: "/01.宣传/" },
    ],
    search: {
      provider: "local",
    },
  }
})

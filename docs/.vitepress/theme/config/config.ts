import type { TeekConfig } from "@teek/config";

// 文档配置
export const teekDocConfig: TeekConfig = {
  themeEnhance: {
    layoutSwitch: {
      defaultMode: "bothWidthAdjustable",
    },
  },
};

// 基础配置
const teekBlogCommonConfig: TeekConfig = {
  teekHome: true,
  vpHome: false,
  wallpaper: {
    enabled: true,
  },
  footerInfo: {
    customHtml: `<span id="runtime"></span>`, // 需要搭配 .vitepress/theme/helper/useRuntime.ts 使用
  },
  docAnalysis: {
    createTime: "2025-03-23",
    statistics: {
      provider: "busuanzi",
    },
  },
};

// 默认配置
export const teekBlogConfig: TeekConfig = {
  ...teekBlogCommonConfig,
  banner: {
    name: "HR 金种子公益计划",
    description: "全国首个专注 HR 在校生培养的公益项目",
    bgStyle: "partImg",
  },
};

// 小图配置
export const teekBlogParkConfig: TeekConfig = {
  ...teekBlogCommonConfig,
  banner: {
    name: "HR 金种子公益计划",
    bgStyle: "partImg",
    imgSrc: ["/blog/bg1.jpg", "/blog/bg1.jpg", "/blog/bg1.jpg"],
    description: [
      "全国首个专注 HR 在校生培养的公益项目",
    ],
    descStyle: "switch",
  },
};

// 大图配置
export const teekBlogFullConfig: TeekConfig = {
  ...teekBlogCommonConfig,
  post: {
    coverImgMode: "full",
  },
  banner: {
    name: "HR 金种子公益计划",
    bgStyle: "fullImg",
    imgSrc: ["/blog/bg1.jpg", "/blog/bg1.jpg", "/blog/bg1.jpg"],
    description: [
      "全国首个专注 HR 在校生培养的公益项目",
    ],
    descStyle: "types",
  },
};

// 全图配置
export const teekBlogBodyConfig: TeekConfig = {
  ...teekBlogCommonConfig,
  pageStyle: "segment-nav",
  bodyBgImg: {
    imgSrc: ["/blog/bg1.jpg", "/blog/bg1.jpg", "/blog/bg1.jpg"],
  },
  themeEnhance: {
    layoutSwitch: {
      defaultMode: "original",
    },
  },
};

// 卡片配置
export const teekBlogCardConfig: TeekConfig = {
  ...teekBlogCommonConfig,
  post: {
    postStyle: "card",
  },
  homeCardListPosition: "left",
  banner: {
    name: "HR 金种子公益计划",
    bgStyle: "fullImg",
    imgSrc: ["/blog/bg1.jpg", "/blog/bg1.jpg", "/blog/bg1.jpg"],
    description: [
      "全国首个专注 HR 在校生培养的公益项目",
    ],
    descStyle: "types",
  },
};

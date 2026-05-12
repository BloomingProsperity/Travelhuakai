import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
  appDirectory: "src",
  async prerender() {
    return [
      "/",
      "/map",
      "/phrasebook",
      "/guide/entry",
      "/guide/payments",
      "/guide/notes",
      "/plan",
      "/share",
      "/ask",
      "/sources",
      "/city/beijing",
      "/city/shanghai",
      "/city/guangzhou",
      "/city/shenzhen"
    ];
  }
} satisfies Config;

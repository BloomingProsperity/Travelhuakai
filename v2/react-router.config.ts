import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
  appDirectory: "src",
  async prerender() {
    return [
      "/",
      "/map",
      "/guide/entry",
      "/guide/payments",
      "/guide/notes",
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

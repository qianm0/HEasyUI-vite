import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx'
// import Unocss from "unocss/vite";
import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "./config/unocss";
const rollupOptions = {

  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

export default defineConfig({

  plugins: [
    vue(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    Unocss()
  ],
  build: {
    rollupOptions,
    minify: false,
    lib: {
      entry: "./src/entry.ts",
      name: "HeasyUI",
      fileName: "heasy-ui",
      // 导出模块格式
      formats: ["es", "umd", "iife"],
    },
    cssCodeSplit: true,
  },
});
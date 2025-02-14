import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: "./postcss.config.ts",
  },
  resolve: {
    alias: {
      "@": "/src", // กำหนด alias สำหรับ src (ถ้าใช้)
    },
  },
  optimizeDeps: {
    include: ["jwt-decode"], // บังคับให้ Vite รวม jwt-decode ไว้ในการ optimize
  },
});

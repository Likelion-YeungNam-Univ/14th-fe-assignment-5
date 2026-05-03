import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 아래 내용을 추가합시다!
  server: {
    open: true,
  },
});
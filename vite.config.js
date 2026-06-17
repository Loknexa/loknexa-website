import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite serves index.html from the project root (not /public, which is for
// static assets only). This is the one deliberate deviation from the
// master-plan tree, required by how Vite's dev server/build pipeline works.
export default defineConfig({
  plugins: [react()],
});

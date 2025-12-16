import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import "ionicons/icons";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});

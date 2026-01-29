import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  server: {
    cors: false,
    proxy: {
      '/blob/main/questions.json': {
        target: 'https://github.com/Sven-27/frontend-quiz-api/',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react(), tailwindcss(), tsconfigPaths()],
})

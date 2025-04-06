import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "backend",
  server: {
    proxy: {
      "/api": {
        target: "https://backend-1-fvoi.onrender.com",
        
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

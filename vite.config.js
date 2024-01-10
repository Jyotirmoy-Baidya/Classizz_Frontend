// vite.config.js
import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/index.css";`,
      },
    },
  },
};

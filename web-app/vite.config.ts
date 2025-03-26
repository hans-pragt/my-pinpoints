// #region Imports

/* Vite */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// #endregion Imports

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 7070
  },
  plugins: [react()],
})

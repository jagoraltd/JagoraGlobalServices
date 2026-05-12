import { defineConfig } from 'vite'

export default defineConfig({
  // Set base to './' so that the site works on any GitHub Pages URL
  base: './',
  build: {
    outDir: 'dist',
  }
})

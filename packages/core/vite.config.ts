import { defineConfig } from 'vitest/config';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'index',
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'js'}`,
    },
    rollupOptions: {
      external: [],
    },
  },
  plugins: [dts()],
  test: {
    environment: 'jsdom'
  }
});

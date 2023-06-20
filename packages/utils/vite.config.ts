import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'skyeyes',
      formats: ['es', 'umd']
    },
    sourcemap: true,
    target: 'modules',
    outDir: 'dist',
    minify: false,
    rollupOptions: {
      external: ['lodash', 'lodash-es'],
    }
  },
  plugins: [dts()],

  // plugins: [react()],
  // envPrefix: ['APP_'],
  resolve: {
    alias: {
      '@assets': resolve(__dirname, 'src/assets'),
      '@layout': resolve(__dirname, 'src/layout'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@store': resolve(__dirname, 'src/store'),
      '@router': resolve(__dirname, 'src/router'),
      '@types': resolve(__dirname, 'src/types'),
      '@': resolve(__dirname, 'src'),
    },
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@/components',
        replacement: resolve(__dirname, './src/components'),
      },
      {
        find: '@/assets',
        replacement: resolve(__dirname, './src/assets'),
      },
      {
        find: '@/config',
        replacement: resolve(__dirname, './src/config'),
      },
      {
        find: '@/hooks',
        replacement: resolve(__dirname, './src/hooks'),
      },
      {
        find: '@/interfaces',
        replacement: resolve(__dirname, './src/interfaces'),
      },
      {
        find: '@/pages',
        replacement: resolve(__dirname, './src/pages'),
      },
      {
        find: '@/store',
        replacement: resolve(__dirname, './src/store'),
      },
      {
        find: '@/utils',
        replacement: resolve(__dirname, './src/utils'),
      },
      {
        find: '@/service',
        replacement: resolve(__dirname, './src/service'),
      },
    {
      find: '@/contexts',
      replacement: resolve(__dirname, './src/contexts'),
    },
    ],
  },
})

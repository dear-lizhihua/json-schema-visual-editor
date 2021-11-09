import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '/@': path.resolve(__dirname, 'src'),
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      fileName: 'index',
      formats: ['esm'],
    },
    minify: false,
    rollupOptions: {
      external: [
        '@ant-design-vue/use',
        '@ant-design/icons-vue',
        'ant-design-vue',
        'ant-design-vue/dist/antd.css',
        'vue',
        'vue-router',
      ],
    }
  },
})

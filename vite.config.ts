/*
 * @Author: heyong
 * @Date: 2024-04-09 11:30:07
 * @LastEditors: heyong
 * @LastEditTime: 2024-04-09 16:23:54
 */
import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //这里进行配置别名
  resolve: {
    alias: {
      '@': path.resolve('./src'), // @代替src
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: '@import "@/assets/styles/index.less";',
      },
    },
    // postcss: {
    //   plugins: [autoprefixer],  //  为 CSS 规则添加厂商前缀的功能
    // }
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // server:{
  //   proxy:'http://0.0.0.0:5172/'
  // },
  plugins: [react()],
})

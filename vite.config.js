import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/neust-facility-scheduler/",
  plugins: [react()],
  head: {
    title: 'NEUST - FS',
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import WindiCSS from 'vite-plugin-windicss'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), WindiCSS()],
   build: {
    chunkSizeWarningLimit: 1000, // تغيير الحد إلى 1000 كيلوبايت

    rollupOptions: {
      output: {
        // يمكنك هنا تحديد أسماء لتجزئة التبعيات الكبيرة تلقائياً
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // فصل المكتبات الكبيرة في ملف واحد يسمى 'vendor'
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
  },


  
})

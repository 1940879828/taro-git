import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'print-multi-entry-urls',
      configureServer(server) {
        server.httpServer?.once('listening', () => {
          const protocol = server.config.server?.https ? 'https' : 'http'
          const hostRaw = server.config.server?.host
          const host = hostRaw === true ? 'localhost' : (hostRaw ?? 'localhost')
          const port = server.config.server?.port ?? 5173
          const origin = `${protocol}://${host}:${port}`
          console.log(`\n  ➜  Panel: ${origin}/src/panel/index.html\n  ➜  Sidebar: ${origin}/src/sidebar/index.html\n`)
        })
      },
    },
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    watch: process.env.WATCH === 'true' ? {} : null,
    rollupOptions: {
      input: {
        panel: resolve(__dirname, 'src/panel/index.html'),
        sidebar: resolve(__dirname, 'src/sidebar/index.html'),
      },
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    outDir: '../extension/out/view-vue',
  },
})

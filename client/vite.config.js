// import { defineConfig } from 'vite'
// import { VitePWA } from 'vite-plugin-pwa'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     VitePWA({ registerType: 'autoUpdate' }),
//   ],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';


// https://vitejs.dev/config/
export default defineConfig({
  base:'/',
  plugins: [
    react(),
    VitePWA({
      manifest: {
        icons: [
          {
            src: "/icon.svg",			// /icons can be found in public
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          },        
          {
            src: "/logo.svg",			// /icons can be found in public
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable"
          },
          // {
          //   src: "/icons/android-icon-144x144.png",			// /icons can be found in public
          //   sizes: "144x144",
          //   type: "image/png",
          //   purpose: "any maskable"
          // }        
        ],
        "theme_color" : "000000",
        "background_color": "#ffffff",
        "display": "fullscreen",
        "orientation": "portrait"
      },
      workbox: {
        runtimeCaching: [{
          urlPattern: ({ url}) =>{
            return url.pathname.startsWith("/")
          },
          handler:  "CacheFirst",
          options: {
            cacheName: "api-cache",
            cacheableResponse: {
              statuses: [0, 200]
            }
          } 
        }]
      }
    }),
  ],
})

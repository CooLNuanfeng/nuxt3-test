// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    server: {
      proxy: {
        '^/rest/.*': {
          target: 'http://106.15.224.111:8092',
          changeOrigin: true,
        }
      }
    }
  },
  runtimeConfig: {
    public: {
      BASEURL: 'http://106.15.224.111:8092'
    }
  },
})

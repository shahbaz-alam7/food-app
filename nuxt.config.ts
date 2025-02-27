// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  colorMode: {
    preference: "light",
  },

  experimental: {
    sharedPrerenderData: false,
    compileTemplate: true,
    resetAsyncDataToUndefined: true,
    templateUtils: true,
    relativeWatchPaths: true,
    defaults: {
      useAsyncData: {
        deep: true,
      },
    },
  },

  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false,
    },
  },

  image: {
    domains: ["https://cdn.dummyjson.com"],
  },

  devtools: { enabled: true },

  modules: ["@nuxt/icon", "@nuxtjs/google-fonts", "@nuxt/image", "@nuxt/ui"],

  runtimeConfig: {
    kitKey: process.env.KIT_KEY,
    public: {
      NUXT_API_BASE_URL: process.env.NUXT_PUBLIC_API_BASE_URL,
    },
  },
  googleFonts: {
    families: {
      Montserrat: true,
    },
  },
   // Enables client-side rendering
   nitro: {
    preset: "vercel"
  }
});

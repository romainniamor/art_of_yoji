// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/main.css"],
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 };
    },
  },
});

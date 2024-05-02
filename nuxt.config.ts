// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "shadcn-nuxt"],
    image: {
        cloudinary: {
            baseURL: "https://res.cloudinary.com/dfdaqvqps/image/fetch/",
        },
    },
    ssr: false,
});

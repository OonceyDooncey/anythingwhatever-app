// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        "@nuxtjs/tailwindcss",
        "@nuxt/image",
        "shadcn-nuxt",
        "@nuxtjs/supabase",
    ],
    image: {
        cloudinary: {
            baseURL: "https://res.cloudinary.com/dfdaqvqps/image/fetch/",
        },
    },
    supabase: {
        redirect: false,
    },
    ssr: false,
});

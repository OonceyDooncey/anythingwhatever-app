// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        "@nuxtjs/tailwindcss",
        "@nuxt/image",
        "shadcn-nuxt",
        "@nuxtjs/supabase",
        "@pinia/nuxt",
        "@vite-pwa/nuxt",
    ],
    image: {
        cloudinary: {
            baseURL: "https://res.cloudinary.com/dfdaqvqps/image/fetch/",
        },
    },
    supabase: {
        redirect: false,
    },
    pwa: {
        manifest: {
            name: "Anything, Whatever",
            short_name: "Anything, Whatever",
            description:
                "A food randomizer for people struggling to choose their meals",
            theme_color: "#C2C4C1",
            icons: [
                {
                    src: "icons/a_w_64x64.png",
                    sizes: "64x64",
                    type: "image/png",
                },
                {
                    src: "icons/a_w_144x144.png",
                    sizes: "144x144",
                    type: "image/png",
                },
                {
                    src: "icons/a_w_192x192.png",
                    sizes: "192x192",
                    type: "image/png",
                },
                {
                    src: "icons/a_w_512x512.png",
                    sizes: "512x512",
                    type: "image/png",
                },
            ],
        },
        workbox: {
            navigateFallback: "/",
        },
        devOptions: {
            enabled: true,
            type: "module",
        },
    },
});

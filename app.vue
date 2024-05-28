<template>
    <div>
        <NuxtPwaManifest />
        <NuxtPage />
    </div>
</template>

<script>
useSeoMeta({
    title: "Anything, Whatever",
    ogTitle: "Anything, Whatever",
    description:
        "A food randomiser for people suffering decision fatigue. Generate food suggestions base on your preference.",
    ogDescription:
        "A food randomiser for people suffering decision fatigue. Generate food suggestions base on your preference.",
    ogImage: "/ogImage.png",
    twitterCard: "summary_large_image",
    twitterTitle: "Anything, whatever",
    twitterDescription:
        "A food randomiser for people suffering decision fatigue. Generate food suggestions base on your preference.",
    twitterImage: "/ogImage.png",
    ogUrl: "https://anythingwhatever-app.vercel.app/",
});
</script>

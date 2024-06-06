<template>
    <div class="flex flex-col items-center w-[80%] mx-auto mt-4">
        <h1 class="font-caveat text-lead text-3xl xs:text-2xl">
            What are you thinking of
        </h1>
        <div class="grid grid-cols-2 w-full mt-12 gap-y-6 gap-x-3">
            <div v-for="cuisine in cuisines" :key="cuisine.name">
                <NuxtLink
                    :to="cuisine.url"
                    class="flex items-center border-2 border-lead rounded-2xl">
                    <NuxtImg
                        provider="cloudinary"
                        :src="cuisine.imgUrl"
                        format="webp"
                        width="40px"
                        height="40px" />
                    <span
                        class="font-caveat text-2xl xs:text-xl text-lead font-bold">
                        {{ cuisine.name }}
                    </span>
                </NuxtLink>
            </div>
        </div>
        <NuxtImg
            provider="cloudinary"
            src="https://res.cloudinary.com/dfdaqvqps/image/upload/v1714632677/Anything%2C%20whatever/options/qcvl3wyo55edotbiss9m.png"
            format="webp"
            width="300px"
            height="200px" />
    </div>
</template>

<script setup lang="ts">
const cuisines = [
    {
        name: "Fast food",
        imgUrl: "https://res.cloudinary.com/dfdaqvqps/image/upload/v1714630364/Anything%2C%20whatever/cuisines/k9phrtfaolphxyky4y7h.png",
        url: "results/cuisine?value=fastfood",
    },
    {
        name: "Indian",
        imgUrl: "https://res.cloudinary.com/dfdaqvqps/image/upload/v1714630364/Anything%2C%20whatever/cuisines/kevpajavs2z4heplfh29.png",
        url: "results/cuisine?value=indian",
    },
    {
        name: "Chinese",
        imgUrl: "https://res.cloudinary.com/dfdaqvqps/image/upload/v1714630364/Anything%2C%20whatever/cuisines/roh6o1we5qi7pwlltiml.png",
        url: "results/cuisine?value=chinese",
    },
    {
        name: "Western",
        imgUrl: "https://res.cloudinary.com/dfdaqvqps/image/upload/v1714630364/Anything%2C%20whatever/cuisines/ywkdxzrdiyrk7ujvbg5f.png",
        url: "results/cuisine?value=western",
    },
    {
        name: "Japanese",
        imgUrl: "https://res.cloudinary.com/dfdaqvqps/image/upload/v1714630363/Anything%2C%20whatever/cuisines/ghdvsdi1qgk7d7tnlucr.png",
        url: "results/cuisine?value=japanese",
    },
    {
        name: "Korean",
        imgUrl: "https://res.cloudinary.com/dfdaqvqps/image/upload/v1714630365/Anything%2C%20whatever/cuisines/b1migomsgvyceccwws6o.png",
        url: "results/cuisine?value=korean",
    },
    {
        name: "Italian",
        imgUrl: "https://res.cloudinary.com/dfdaqvqps/image/upload/v1714630365/Anything%2C%20whatever/cuisines/mcyfmxuy0ht7ksbrcafr.png",
        url: "results/cuisine?value=italian",
    },
    {
        name: "Mexican",
        imgUrl: "https://res.cloudinary.com/dfdaqvqps/image/upload/v1714630365/Anything%2C%20whatever/cuisines/x0pyss8u5bpuzzur1wvi.png",
        url: "results/cuisine?value=mexican",
    },
    {
        name: "Thai food",
        imgUrl: "https://res.cloudinary.com/dfdaqvqps/image/upload/v1714630365/Anything%2C%20whatever/cuisines/mwaaxy4xidlbucpwhiuh.png",
        url: "results/cuisine?value=thai",
    },
    {
        name: "Vietnamese",
        imgUrl: "https://res.cloudinary.com/dfdaqvqps/image/upload/v1715605939/Anything%2C%20whatever/cuisines/wiqtch7p3lapgsausrur.png",
        url: "results/cuisine?value=vietnamese",
    },
];
</script>

<style scoped></style>

<template>
    <NuxtLayout>
        <div class="h-[10%] flex items-end">
            <NuxtLink to="/" class="flex items-center w-fit p-1 ml-5">
                <span
                    class="material-symbols-outlined text-lead pr-2 scale-125">
                    arrow_back
                </span>
            </NuxtLink>
        </div>
        <div class="flex flex-col items-center mt-20">
            <div class="flex flex-col items-center">
                <NuxtImg
                    provider="cloudinary"
                    :src="img"
                    format="webp"
                    width="230px"
                    height="230px" />
                <div class="mt-10 flex justify-center">
                    <p class="font-caveat text-lead text-2xl">
                        {{ text }}
                    </p>
                </div>
                <div class="flex flex-col items-center w-[80%] mx-auto">
                    <div class="absolute" ref="skeleton">
                        <Skeleton class="w-[230px] h-12 mt-4" />
                    </div>
                    <div class="mt-4 flex justify-center break-words">
                        <span
                            class="font-shadowsintolight text-4xl tracking-wide text-lead h-10 font-bold text-center">
                            {{ food }}
                        </span>
                    </div>
                </div>
            </div>
            <div class="flex items-center w-[80%] justify-between mt-14">
                <Drawer>
                    <DrawerTrigger
                        class="font-caveat bg-orange text-xl rounded-3xl text-white w-[50%] p-2">
                        Find out more
                        <FoodInfo />
                    </DrawerTrigger>
                </Drawer>
                <Button
                    class="font-caveat text-xl bg-transparent border-2 border-lead rounded-3xl text-lead w-[40%] hover:bg-transparent"
                    @click="regenerateFood">
                    Nah
                </Button>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

useHead({
    link: [
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,0,0",
        },
    ],
});

const food = ref<string>();
const text = ref<string>("You should have.....");
const img = ref<string>(
    "https://res.cloudinary.com/dfdaqvqps/image/upload/v1714728235/Anything%2C%20whatever/mobile/vkcmxzh04yuqc3hxvi65.png"
);
const skeleton = ref();
let nahCounter = 1;
const category = useRoute().params.options;
const value = useRoute().query.value;

const fetchFood = async function () {
    const response = await $fetch("/api/food", {
        query: { category, value },
    });
    food.value = response.suggestedFood;

    if (response.statusCode === 200) {
        skeleton.value.classList.add("hidden");
    }

    if (response.statusCode !== 200) {
        showError({
            statusCode: response.statusCode,
            statusMessage: response.message,
        });
    }
};
fetchFood();

const regenerateFood = function () {
    skeleton.value.classList.remove("hidden");
    food.value = "";

    fetchFood();
    nahCounter++;

    switch (nahCounter) {
        case 1:
            text.value = "Okay, how about";
            img.value =
                "https://res.cloudinary.com/dfdaqvqps/image/upload/v1714728235/Anything%2C%20whatever/mobile/ocont6ghmldiuig7imq6.png";
            break;
        case 2:
            text.value = "Maybe you can try";
            img.value =
                "https://res.cloudinary.com/dfdaqvqps/image/upload/v1714728235/Anything%2C%20whatever/mobile/tdywpys6qiogrpxoq4pp.png";
            break;
        case 3:
            text.value = "JUST EAT THIS";
            img.value =
                "https://res.cloudinary.com/dfdaqvqps/image/upload/v1714728235/Anything%2C%20whatever/mobile/do9qkibeql2ino0hkuzx.png";
            break;
        case 4:
            text.value = "PLEASEE JUST EAT";
            img.value =
                "https://res.cloudinary.com/dfdaqvqps/image/upload/v1714728235/Anything%2C%20whatever/mobile/bngegcyclu3tqs0vv9wr.png";
            break;
    }
};
</script>

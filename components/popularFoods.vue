<template>
    <div class="mx-auto w-[80%] mt-2">
        <h3 class="font-caveat font-bold text-lead xs:text-2xl text-3xl">
            Popular choice
        </h3>
        <ul v-for="food in popularFoods">
            <li class="mt-6">
                <Drawer>
                    <DrawerTrigger
                        class="bg-transparent border-2 border-lead rounded-xl flex items-center p-4 w-full justify-between">
                        <NuxtImg
                            src="https://media.graphassets.com/resize=fit:max,width:1440/output=format:png/YLjWG0T6SH6czhYGP7BU"
                            format="webp"
                            width="60px"
                            height="60px"
                            class="rounded-xl mr-2" />
                        <div class="flex flex-col w-4/6">
                            <h4
                                class="text-left font-shadowsintolight text-lead text-2xl">
                                {{ food.name }}
                            </h4>
                            <div class="flex">
                                <Badge
                                    class="bg-orange border-0 mr-1 font-caveat text-lg hover:bg-orange pl-4 pr-4 xs:pl-2 xs:pr-2">
                                    {{ food.calories }}
                                </Badge>
                                <Badge
                                    class="bg-orange border-0 font-caveat text-lg hover:bg-orange pl-4 pr-4 xs:pl-2 xs:pr-2">
                                    {{ food.cuisine }}
                                </Badge>
                            </div>
                        </div>
                        <span class="material-symbols-outlined text-lead w-1/6">
                            chevron_right
                        </span>
                        <FoodInfo />
                    </DrawerTrigger>
                </Drawer>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";

useHead({
    link: [
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,0,0",
        },
    ],
});

const popularFoods = [
    { name: "Jollibee", calories: "800kcal", cuisine: "Mexican" },
];
</script>

<style scoped></style>

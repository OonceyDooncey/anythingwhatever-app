<template>
    <DrawerContent>
        <div
            class="flex flex-col items-center w-[88%] mt-10"
            :class="store.fetching ? 'block' : 'hidden'">
            <Skeleton class="w-[180px] h-[180px] mt-10" />
            <div class="flex items-center mt-6">
                <Skeleton class="w-[90px] h-[35px] mr-4 xs:mr-2" />
                <Skeleton class="w-[100px] h-[35px]" />
            </div>
            <div class="flex flex-col items-center">
                <Skeleton class="w-[180px] h-[40px] mt-4" />
                <Skeleton class="w-[300px] xs:w-[250px] h-[70px] mt-4" />
            </div>
        </div>
        <div
            class="flex flex-col items-center mt-16"
            :class="store.fetching ? 'hidden' : 'block'">
            <NuxtImg
                :src="store.selectedFoodImage"
                format="webp"
                width="180px"
                height="180px"
                class="rounded-full w-[180px] h-[180px] object-cover" />
            <div class="flex items-center mt-6 font-shadowsintolight">
                <Badge
                    class="text-lead pl-4 pr-4 text-xl bg-transparent border-lead border-2 font-normal mr-4 xs:mr-2 hover:bg-transparent">
                    {{ store.selectedFoodCalories }}kcal
                </Badge>
                <Badge
                    class="text-lead pl-4 pr-4 text-xl bg-transparent border-lead border-2 font-normal hover:bg-transparent">
                    {{ store.selectedFoodCuisine }}
                </Badge>
            </div>
            <DrawerTitle>
                <h1 class="mt-4">{{ store.selectedFood }}</h1>
            </DrawerTitle>
            <DrawerDescription>
                <p>
                    {{ store.selectedFoodInfo }}
                </p>
            </DrawerDescription>
        </div>
        <DrawerClose class="flex flex-col mt-6 w-[60%] items-center">
            <a
                :href="store.searchURL"
                target="_blank"
                class="bg-orange font-caveat bold text-2xl w-full rounded-3xl text-white py-1"
                @click="updatePopularity">
                I'll take it
            </a>
            <Button
                class="font-caveat bold text-xl rounded-3xl text-white py-1 w-24 mt-4">
                Nope
            </Button>
        </DrawerClose>
    </DrawerContent>
</template>

<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DrawerContent } from "@/components/ui/drawer";
import { useGlobalStore } from "~/stores";
import { Skeleton } from "@/components/ui/skeleton";

const store = useGlobalStore();

const updatePopularity = async () => {
    const popularity = store.selectedFoodPopularity;
    const foodName = store.selectedFood;

    if (store.updatePopularity) {
        const response = await $fetch("/api/popularity", {
            method: "POST",
            body: { popularity, foodName },
        });

        if (response && response.statusCode === 500) {
            showError({
                statusCode: response.statusCode,
                statusMessage: response.message,
            });
        }

        store.updatePopularity = false;
    }
};
</script>

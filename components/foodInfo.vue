<template>
    <DrawerContent>
        <NuxtImg
            src="https://media.graphassets.com/resize=fit:max,width:1440/output=format:png/YLjWG0T6SH6czhYGP7BU"
            format="webp"
            width="180px"
            height="180px"
            class="rounded-full mt-10" />
        <div class="w-[60%] flex jitems-start mt-6 font-shadowsintolight">
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
                Nah
            </Button>
        </DrawerClose>
    </DrawerContent>
</template>

<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DrawerContent } from "@/components/ui/drawer";
import { useGlobalStore } from "~/stores";

const store = useGlobalStore();

const updatePopularity = async () => {
    const popularity = store.selectedFoodPopularity;
    const foodName = store.selectedFood;

    const response = await $fetch("/api/popularity", {
        method: "POST",
        body: { popularity, foodName },
    });

    if (response.statusCode === 500) {
        showError({
            statusCode: response.statusCode,
            statusMessage: response,
        });
    }
};
</script>

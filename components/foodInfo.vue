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
                class="text-lead pl-4 pr-4 text-xl bg-transparent border-lead border-2 font-normal mr-4 xs:mr-2">
                800kcal
            </Badge>
            <Badge
                class="text-lead pl-4 pr-4 text-xl bg-transparent border-lead border-2 font-normal">
                Mexican
            </Badge>
        </div>
        <DrawerTitle>
            <h1 class="mt-4">Jollibee</h1>
        </DrawerTitle>
        <DrawerDescription>
            <p>
                Jollibee is a Filipino chain of fast food restaurants, they
                offer food such as Fried Chicken, Burgers and Pies
            </p>
        </DrawerDescription>
        <DrawerClose class="flex flex-col mt-6 w-[60%] items-center">
            <a
                href="https://www.google.com/maps/search/jollibee"
                class="bg-orange font-caveat bold text-2xl w-full rounded-3xl text-white py-1">
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
</script>

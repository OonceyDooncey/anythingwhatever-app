<template>
    <div class="mx-auto w-[80%] mt-2">
        <h3 class="font-caveat font-bold text-lead xs:text-2xl text-3xl">
            Popular choice
        </h3>
        <ul>
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
                                Deez nuts
                            </h4>
                            <div class="flex">
                                <Badge
                                    class="bg-orange border-0 mr-1 font-caveat text-lg hover:bg-orange pl-4 pr-4 xs:pl-2 xs:pr-2">
                                    800kcal
                                </Badge>
                                <Badge
                                    class="bg-orange border-0 font-caveat text-lg hover:bg-orange pl-4 pr-4 xs:pl-2 xs:pr-2">
                                    Mexican
                                </Badge>
                            </div>
                        </div>
                        <span class="material-symbols-outlined text-lead w-1/6">
                            chevron_right
                        </span>
                        <DrawerContent>
                            <NuxtImg
                                src="https://media.graphassets.com/resize=fit:max,width:1440/output=format:png/YLjWG0T6SH6czhYGP7BU"
                                format="webp"
                                width="150px"
                                height="150px"
                                class="rounded-full" />
                            <h1>Hello</h1>
                            <DrawerClose>
                                <Button>Close</Button>
                            </DrawerClose>
                        </DrawerContent>
                    </DrawerTrigger>
                </Drawer>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";

useHead({
    link: [
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,0,0",
        },
    ],
});
</script>

<style scoped></style>

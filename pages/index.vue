<template>
    <NuxtLayout>
        <Tabs default-value="home">
            <TabsContent value="home">
                <RecomendedFood />
                <PopularFoods />
            </TabsContent>
            <TabsContent value="cuisines">
                <CuisinesOptions />
            </TabsContent>
            <TabsContent value="budget">
                <BudgetOptions />
            </TabsContent>
            <TabsList>
                <TabsTrigger value="home">
                    <span class="material-symbols-outlined scale-150">
                        home
                    </span>
                    <h2 class="font-caveat text-xl pt-1">Home</h2>
                </TabsTrigger>
                <TabsTrigger value="cuisines">
                    <span class="material-symbols-outlined scale-150">
                        menu_book
                    </span>
                    <h2 class="font-caveat text-xl pt-1">Cuisines</h2>
                </TabsTrigger>
                <TabsTrigger value="budget">
                    <span class="material-symbols-outlined scale-150">
                        monetization_on
                    </span>
                    <h2 class="font-caveat text-xl pt-1">Budget</h2>
                </TabsTrigger>
                <NuxtLink
                    to="/results/anything"
                    class="flex flex-col items-center text-lead50">
                    <span class="material-symbols-outlined scale-150">
                        cached
                    </span>
                    <h2 class="font-caveat text-xl pt-1">Randomize</h2>
                </NuxtLink>
            </TabsList>
        </Tabs>
    </NuxtLayout>
</template>

<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
useHead({
    link: [
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,0,200",
        },
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,0,200",
        },
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,0,200",
        },
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,0,200",
        },
    ],
});
</script>

<template>
    <NuxtLayout>
        <h1
            class="font-amatic text-white text-3xl font-bold tracking-wider p-3 h-[10%]">
            ANYTHING, WHATEVER
        </h1>
        <Tabs default-value="home">
            <div
                class="flex flex-col md:justify-end sm:justify-center xs:justify-center">
                <ClientOnly>
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
                </ClientOnly>
            </div>
            <TabsList class="overflow-hidden">
                <ClientOnly>
                    <TabsTrigger value="home" class="group">
                        <span
                            class="material-symbols-outlined scale-[2] translate-y-4 group-data-[state=active]:scale-[1.5] group-data-[state=active]:translate-y-2 duration-300">
                            home
                        </span>
                        <span
                            class="font-caveat text-xl pt-1 opacity-0 translate-y-6 group-data-[state=active]:opacity-100 group-data-[state=active]:translate-y-2 duration-300">
                            Home
                        </span>
                    </TabsTrigger>
                    <TabsTrigger value="cuisines" class="group">
                        <span
                            class="material-symbols-outlined scale-[2] translate-y-4 group-data-[state=active]:scale-[1.5] group-data-[state=active]:translate-y-2 duration-300">
                            menu_book
                        </span>
                        <span
                            class="font-caveat text-xl pt-1 opacity-0 translate-y-6 group-data-[state=active]:opacity-100 group-data-[state=active]:translate-y-2 duration-300">
                            Cuisines
                        </span>
                    </TabsTrigger>
                    <TabsTrigger value="budget" class="group">
                        <span
                            class="material-symbols-outlined scale-[2] translate-y-4 group-data-[state=active]:scale-[1.5] group-data-[state=active]:translate-y-2 duration-300">
                            monetization_on
                        </span>
                        <span
                            class="font-caveat text-xl pt-1 opacity-0 translate-y-6 group-data-[state=active]:opacity-100 group-data-[state=active]:translate-y-2 duration-300">
                            Budget
                        </span>
                    </TabsTrigger>
                </ClientOnly>
                <NuxtLink
                    to="/results/anything"
                    class="flex flex-col items-center text-lead50">
                    <span
                        class="material-symbols-outlined scale-[2] translate-y-4 group-data-[state=active]:scale-[1.5] group-data-[state=active]:translate-y-2 duration-300">
                        cached
                    </span>
                    <span
                        class="font-caveat text-xl pt-1 opacity-0 translate-y-6">
                        Randomize
                    </span>
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

const store = useGlobalStore();

onMounted(() => {
    store.updatePopularity = true;
});
</script>

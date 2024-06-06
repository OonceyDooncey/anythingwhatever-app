<template>
  <div class="mx-auto w-[80%] mt-2">
    <h3 class="font-caveat font-bold text-lead xs:text-2xl text-3xl">Popular choice</h3>
    <div>
      <ul class="mt-3" v-if="pending">
        <li
          class="w-full h-[100px] border-2 border-lead rounded-xl flex items-center justify-between p-4 mt-3"
          v-for="skeleton in 3"
          :key="skeleton"
        >
          <Skeleton class="w-[62px] h-[62px] rounded-xl mr-2 bg-lead50" />
          <div class="flex flex-col w-4/6 items-start">
            <Skeleton class="w-[100px] h-[25px] rounded-xl xs:w-[80px]" />
            <div class="mt-[7px] flex items-center">
              <Skeleton class="w-[65px] xs:w-[55px] h-[32px] mr-1" />
              <Skeleton class="w-[65px] xs:w-[55px] h-[32px]" />
            </div>
          </div>
          <span class="w-1/6 flex justify-center">
            <Skeleton class="w-[20px] h-[20px] rounded-sm sm:w-[15px] xs:w-[15px]" />
          </span>
        </li>
      </ul>
      <ul v-for="food in popularFoods" v-else>
        <li class="mt-3">
          <Drawer>
            <DrawerTrigger
              @click="
                fetchFoodInfo(food.food);
                store.updatePopularity = true;
              "
              class="bg-transparent border-2 border-lead rounded-xl flex items-center p-4 w-full justify-between"
            >
              <NuxtImg
                :src="food.image"
                format="webp"
                width="60px"
                height="60px"
                class="rounded-xl mr-2 w-[60px] h-[60px] object-cover xs:w-[50px] xs:h-[50px]"
              />
              <div class="flex flex-col w-4/6">
                <h4 class="text-left font-shadowsintolight text-lead text-2xl">
                  {{ food.food }}
                </h4>
                <div class="flex">
                  <Badge class="bg-orange border-0 mr-1 font-caveat text-lg hover:bg-orange pl-4 pr-4 xs:pl-2 xs:pr-2">
                    {{ food.calories }}kcal
                  </Badge>
                  <Badge class="bg-orange border-0 font-caveat text-lg hover:bg-orange pl-4 pr-4 xs:pl-2 xs:pr-2">
                    {{ food.cuisine }}
                  </Badge>
                </div>
              </div>
              <span class="material-symbols-outlined text-lead w-1/6"> chevron_right </span>
              <FoodInfo />
            </DrawerTrigger>
          </Drawer>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import { Skeleton } from "@/components/ui/skeleton";

useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,0,0",
    },
  ],
});

const store = useGlobalStore();

const { data: popularFoods, pending, error } = await useLazyFetch("/api/popularfoods");

if (error.value) {
  showError({
    statusCode: 404,
  });
  console.log(error);
}
</script>

<template>
    <NuxtLayout>
        <div class="flex flex-col items-center">
            <NuxtImg
                provider="cloudinary"
                format="webp"
                src="https://res.cloudinary.com/dfdaqvqps/image/upload/v1714381115/Anything%2C%20whatever/kueldjrjkobhtao6pzne.png"
                width="300px"
                height="200px"
                class="mt-[18rem]" />
            <span class="font-caveat text-lead text-3xl mt-6">
                Oops, something went wrong
            </span>
            <Button
                class="font-caveat bg-orange text-xl rounded-3xl text-white w-[50%] p-2 mt-6 hover:bg-orange"
                @click="handleError">
                Head back to safety
            </Button>
        </div>
    </NuxtLayout>
</template>

<script setup>
import { Button } from "@/components/ui/button";

const handleError = () => clearError({ redirect: "/" });
</script>

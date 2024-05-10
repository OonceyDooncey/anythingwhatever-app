<template>
    <div
        class="flex flex-col items-center border-2 border-lead p-3 rounded-xl mx-auto w-[80%]">
        <NuxtImg
            src="https://media.graphassets.com/resize=fit:max,width:1440/output=format:png/YLjWG0T6SH6czhYGP7BU"
            format="webp"
            width="100px"
            height="100px"
            class="rounded-full" />
        <h4 class="font-caveat text-lead xs:text-xl text-2xl mt-2">
            Recommended food
        </h4>
        <span class="font-shadowsintolight text-lead text-3xl">{{ food }}</span>
    </div>
</template>

<script lang="ts" setup>
const food = "Jollibee";
</script>

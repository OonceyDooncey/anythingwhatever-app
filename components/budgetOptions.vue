<template>
    <div class="flex flex-col items-center w-[80%] mx-auto mt-4">
        <h1 class="font-caveat text-lead text-3xl">
            How rich are you feeling?
        </h1>
        <div v-for="budget in budgets">
            <NuxtLink
                :to="budget.url"
                class="flex flex-col items-center border-2 border-lead rounded-2xl p-2 w-[160px] h-[160px] mt-4">
                <NuxtImg
                    provider="cloudinary"
                    :src="budget.imgUrl"
                    format="webp"
                    width="80px"
                    height="100px" />
                <span class="font-caveat text-2xl text-lead font-bold pt-2">
                    {{ budget.budget }}
                </span>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
const budgets = [
    {
        budget: "Rich",
        imgUrl: "https://res.cloudinary.com/dfdaqvqps/image/upload/v1714375856/Anything%2C%20whatever/options/tt2nqomac1rrpjetlrbr.png",
        url: "results/budget?value=high",
    },
    {
        budget: "Moderate",
        imgUrl: "https://res.cloudinary.com/dfdaqvqps/image/upload/v1714375856/Anything%2C%20whatever/options/gabo7d4vphf6yc5bq9hk.png",
        url: "results/budget?value=moderate",
    },
    {
        budget: "Poor",
        imgUrl: "https://res.cloudinary.com/dfdaqvqps/image/upload/v1714375856/Anything%2C%20whatever/options/az8c04gbijrxq0gzh1ib.png",
        url: "results/budget?value=low",
    },
];
</script>

<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import { TabsTrigger, type TabsTriggerProps, useForwardProps } from "radix-vue";
import { cn } from "@/lib/utils";

const props = defineProps<
    TabsTriggerProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
    <TabsTrigger
        v-bind="forwardedProps"
        :class="
            cn(
                'flex flex-col items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-transparent data-[state=active]:text-orange data-[state=active]:shadow-sm text-lead50',
                props.class
            )
        ">
        <slot />
    </TabsTrigger>
</template>

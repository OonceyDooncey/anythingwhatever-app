<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import { TabsList, type TabsListProps } from "radix-vue";
import { cn } from "@/lib/utils";

const props = defineProps<
    TabsListProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});
</script>

<template>
    <TabsList
        v-bind="delegatedProps"
        :class="
            cn(
                'flex h-[12%] bg-muted p-1 text-muted-foreground justify-evenly bg-transparent rounded-none items-center',
                props.class
            )
        ">
        <slot />
    </TabsList>
</template>

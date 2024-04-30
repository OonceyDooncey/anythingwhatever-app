<script setup lang="ts">
import { TabsRoot, useForwardPropsEmits } from "radix-vue";
import type { TabsRootEmits, TabsRootProps } from "radix-vue";

const props = defineProps<TabsRootProps>();
const emits = defineEmits<TabsRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
    <TabsRoot
        v-bind="forwarded"
        class="h-[90%] flex flex-col divide-y-2 divide-lead50">
        <slot />
    </TabsRoot>
</template>

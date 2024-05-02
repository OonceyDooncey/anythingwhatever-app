<script lang="ts" setup>
import type { DrawerDescriptionProps } from "vaul-vue";
import { DrawerDescription } from "vaul-vue";
import { type HtmlHTMLAttributes, computed } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<
    DrawerDescriptionProps & { class?: HtmlHTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});
</script>

<template>
    <DrawerDescription
        v-bind="delegatedProps"
        :class="
            cn(
                'text-lead flex flex-col items-center font-caveat text-2xl w-[80%] mx-auto mt-4 text-center xs:text-justify sm:text-justify tracking-tight',
                props.class
            )
        ">
        <slot />
    </DrawerDescription>
</template>

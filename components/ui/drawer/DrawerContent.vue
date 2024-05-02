<script lang="ts" setup>
import { DrawerContent, DrawerPortal } from "vaul-vue";
import type { DialogContentEmits, DialogContentProps } from "radix-vue";
import { useForwardPropsEmits } from "radix-vue";
import type { HtmlHTMLAttributes } from "vue";
import DrawerOverlay from "./DrawerOverlay.vue";
import { cn } from "@/lib/utils";

const props = defineProps<
    DialogContentProps & { class?: HtmlHTMLAttributes["class"] }
>();
const emits = defineEmits<DialogContentEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
    <DrawerPortal>
        <DrawerOverlay />
        <DrawerContent
            v-bind="forwarded"
            :class="
                cn(
                    'fixed inset-x-0 bottom-0 z-50 mt-24 flex h-[80%] flex-col rounded-t-[10px] border bg-background items-center',
                    props.class
                )
            ">
            <div class="mx-auto mt-4 h-1 w-[60%] rounded-full bg-lead50" />
            <slot />
        </DrawerContent>
    </DrawerPortal>
</template>

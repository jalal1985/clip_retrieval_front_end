<template>
    <div class="flex flex-col bg-white border border-slate-300 rounded p-5 hover:border-sky-500">
        <slot />
    </div>
</template>
<script setup lang="ts">
// Set the interface for the props, we do this inline because it will be unique per component.
interface Props {
    disabled?: boolean;
}

// Because we use props, we want then to have defaults that are always set, but can be overwritten when needed.
const props = withDefaults(defineProps<Props>(),{
    disabled: false,
});
</script>

<template>
    <NuxtLink
        :to="props.url"
        :class="props.class"
        :target="props.target"
        external
    >
        {{ props.title }}
    </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
    class?: string;
    target?: string; // make enum
    title: string;
    url: string;
}

const props = withDefaults(defineProps<Props>(),{
    target: '_blank',
});
</script>

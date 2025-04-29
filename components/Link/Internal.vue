<template>
    <NuxtLink
        :class="props.class"
        :to="props.url"
    >
        {{ props.title }}
    </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
    title: string;
    url: string;
}

const props = defineProps<Props>();
</script>

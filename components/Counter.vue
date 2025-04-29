<template>
    Used for making a block that has a counter
</template>

<script setup lang="ts">
    interface Props {
        background?: string;
        counterStart: number;
        counterEnd: number;
        delay: number;
        icon?: string;
        title?: string;
        speed?: number;
    }

    const props = withDefaults(defineProps<Props>(),{
        counterStart: 0,
        counterEnd: 0,
        delay: 0, // in milliseconds
        speed: 300, // in milliseconds
    });
</script>

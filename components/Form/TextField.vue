<template>
    <textarea
        class=""
        :class="props.class"
    >
    </textarea>
</template>

<script setup lang="ts">
interface Props {
    class?: string;
}

const props = defineProps<Props>();
</script>

<template>
    <div
        class="w-auto h-auto"
        :class="props.class"
    >
        <img v-if="props.type == 'image'"
            :src="props.imageSource"
            :alt="props.imageAlt"
            :class="props.imageClass"
        >
    </div>
</template>

<script setup lang="ts">
interface Props {
    alignment?: string;
    class?: string;
    imageClass?: string;
    imageSource: string;
    imageAlt: string;
    type?: string;
}

const props = withDefaults(defineProps<Props>(),{
    type: 'image', // enum with background/image
    alignment: 'top left', // enum to 3x3 grid options
})
</script>


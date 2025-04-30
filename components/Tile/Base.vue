<template>
    <div
        class="model flex flex-col bg-zinc-100 bg-cover bg-no-repeat bg-center border border-slate-300 rounded-lg p-5 aspect-5/3 relative"
        :class="props.class"
        :id="props.id"
    >
        <img class="rounded-lg" :src="imageWithFallBack">
        <slot name="name"/>
    </div>
</template>

<script setup lang="ts">

interface Props {
    id: number;
    url?: string;
    disabled?: boolean;
    class?: string;
}

const props = withDefaults(defineProps<Props>(),{
    disabled: false,
});

const imageWithFallBack = computed(():string => {
    let imageUrl: string;

    if (!props.url) {
        imageUrl = 'https://placehold.co/400x600?text=placeholder'; // TODO make fallback a local file
    } else {
        imageUrl = props.url; // This should pretty much always be the output
    }

    return imageUrl;
});
</script>

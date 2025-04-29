<template>
    <div
        class="flex flex-col bg-zinc-200 bg-cover bg-no-repeat bg-center border border-slate-300 rounded-lg p-5 hover:border-[#A28546]"
        :class="backgroundImage"
        :id="props.id"
    >
        <slot name="name"/>
    </div>
</template>
<script setup lang="ts">
// Set the interface for the props, we do this inline because it will be unique per component.
interface Props {
    id: number;
    url?: string;
    disabled?: boolean;
}

// Because we use props, we want then to have defaults that are always set, but can be overwritten when needed.
const props = withDefaults(defineProps<Props>(),{
    disabled: false,
});

const backgroundImage = computed(():string => {
    let imageUrl: string;

    if (!props.url) {
        imageUrl = 'bg-[url(https://placehold.co/400x600?text=placeholder)]';
    } else {
        imageUrl = 'bg-[url(' + props.url + ')]';
    }

    return imageUrl;
});
</script>

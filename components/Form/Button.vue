<template>
    <button
        class="min-h-9 flex border border-slate-300 items-center justify-center bg-sky-500 rounded text-white mb-5 px-4 hover:bg-sky-700 focus:outline-sky-500"
        :autofocus="props.autofocus"
        :class="props.class"
        :disabled="props.disabled"
        :form="props.form"
        :formaction="props.formaction"
        :formmethod="props.formmethod"
        :formtarget="props.formtarget"
        :name="props.name"
        :type="props.type"
        :value="props.value"
    >
        <slot />
    </button>
</template>

<script setup lang="ts">
interface Props {
    class?: string;
    disabled?: string;
    form?: string;
    formaction?: string;
    formmethod?: string;
    formtarget?: string;
    name?: string;
    type?: string;
    value?: string;
}

const props = withDefaults(defineProps<Props>(),{
    type: 'button',
});
</script>

<template>
    <div>
        <label v-if="hasLabel === true"
               :for="props.inputName"
        >
            {{ props.label }} <br>
        </label>

        <input
            class="w-full h-9 rounded border border-slate-300 focus:outline-none focus:border-sky-500 px-3 py-1 mb-5"
            :class="props.class"
            :disabled="props.disabled"
            :name="props.inputName"
            :type="props.type"
            :value="props.value"
        >
    </div>
</template>

<script setup lang="ts">
interface Props {
    disabled?: boolean;
    type?: string;
    class?: string;
    hasLabel?: boolean;
    label?: string;
    inputName?: string;
    value?: string | number;
}

const props = withDefaults(defineProps<Props>(),{
    disabled: false,
    type: 'text',
    class: '',
});
</script>

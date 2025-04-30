<template>
    <main class="w-full flex justify-center ">
        <div class="container">


            <div
                class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-15px"
            >
                <TileBase
                    v-for="model in models"
                    :url="model.url"
                    :class="'px-0 py-0'"
                    @click="selectedModel = model.id"
                >
                    <template #name>
                        <span class="model__name text-slate-400 text-center text-sm absolute bottom-0 left-0 right-0 m-auto">{{ model.name }}</span>
                    </template>
                </TileBase>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useModelStore} from "~/stores/model";

// Store
const modelStore = useModelStore();
const { selectedModel } = storeToRefs(modelStore);

// Mock data
const models = [
    {
        id: 1,
        url: 'https://placehold.co/400x600/000/A28546.png',
        name: 'Silvie Meis',
    },
    {
        id: 2,
        url: 'https://placehold.co/400x600?text=placeholder',
        name: 'Eloïse van Oranje',
    },
    {
        id: 3,
        url: 'https://placehold.co/400x600?text=placeholder',
        name: 'Vivian Hoorn',
    },
    {
        id: 4,
        url: 'https://placehold.co/400x600?text=placeholder',
        name: 'Anna Nooshin',
    },
    {
        id: 5,
        url: 'https://placehold.co/400x600?text=placeholder',
        name: 'Monica Geuze',
    },
    {
        id: 6,
        url: 'https://placehold.co/400x600?text=placeholder',
        name: 'Nina Warink',
    },
    {
        id: 7,
        url: 'https://placehold.co/400x600?text=placeholder',
        name: 'Nochtli Peralta Alvarez',
    },

]
</script>

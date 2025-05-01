<template>
    <main class="w-full flex justify-center ">
        <div class="container">
            <Loader v-if="loader === true" />
            <div v-else>

                <div

                    class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-15px"
                >
                    <TileBase
                        v-for="model in models"
                        :url="model.url"
                        :class="'model px-0 py-0'"
                        @click="clickHandler(model)"
                    >
                        <template #name>
                            <span
                                class="model__name text-white text-center text-sm text-shadow-md absolute bottom-0 left-0 right-0 m-auto">{{
                                    model.name
                                }}</span>
                        </template>
                    </TileBase>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useModelStore} from "~/stores/models";
import {ref, onMounted} from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

// Stores
const modelStore = useModelStore();
const { models, selectedModel } = storeToRefs(modelStore);

// set loader default state
let loader = ref(true);

// API request, will be moved to dedicated api location, but for the demo it will stay here.
const fetchModels = async () => {
    try {
        const response = await axios.get('https://some.url'); // TODO change to actual api url
        models.value = response.data;
        loader.value = false;
    } catch (error) { // Fallback  with mock data and shows error in console
        console.error('failed fetching models:', error, 'using mock data');
        models.value = modelsMock;
        loader.value = false;
    }
}

// Click handler
function clickHandler (item) {
    selectedModel.value = {
        id: item.id,
        name: item.name,
    }

    router.push(`/fashion`);
}

// Mock data
const modelsMock = [
    {
        id: 1,
        url: 'https://celebmafia.com/wp-content/uploads/2015/04/sylvie-meis-let-s-dance-6.-show-in-cologne-april-2015_6.jpg',
        name: 'Silvie Meis',
    },
    {
        id: 2,
        url: 'https://i.pinimg.com/736x/fc/a0/ac/fca0ac688d0bd631d18dedad835e47d2.jpg',
        name: 'Vivian Hoorn',
    },
    {
        id: 3,
        url: 'https://media-manager.starsinsider.com/gallery/1080/na_5c35c96eb7507.jpg',
        name: 'Anna Nooshin',
    },
    {
        id: 4,
        url: 'https://www.talkiesmagazine.nl/wp-content/uploads/2021/08/talking-essentials-monica-geuze-scaled.jpg',
        name: 'Monica Geuze',
    },
    {
        id: 5,
        url: 'https://iv1.lisimg.com/image/21838955/720full-nina-warink.jpg',
        name: 'Nina Warink',
    },
    {
        id: 6,
        url: 'https://ilarge.lisimg.com/image/16863784/740full-nochtli-peralta-alvarez.jpg',
        name: 'Nochtli Peralta Alvarez',
    },
]

onMounted(fetchModels); // will fire as soon as you navigate to this page
</script>

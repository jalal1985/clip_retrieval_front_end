<template>
    <main class="w-full flex justify-center ">
        <div class="container">
            <div class="w-full flex justify-center mb-2">
                Recommendation in the style of {{ selectedModel.name }}
            </div>

            <div class="w-full flex justify-center mb-2">
                <LinkInternal :url="'/models'" :title="'Go back to model selection'"/>
            </div>

            <Loader v-if="loader === true" />

            <div
                v-else
                class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-15px"
            >
                <TileBase
                    v-for="f in fashion"
                    :url="f.url"
                    :class="'fashion px-0 py-0'"
                    :image-alt="f.caption"
                    @click="clickHandler(fashion)"
                >
                    <template #name>
                        <div class="absolute bottom-0 left-0 right-0 m-auto">
                            <span class="fashion__name w-full flex justify-center text-white text-sm text-shadow-md">{{ f.caption }}</span>
                            <span class="fashion__price w-full flex justify-center text-white text-sm text-shadow-md">&euro; {{ formatPrice(f.price) }}</span>
                        </div>
                    </template>
                </TileBase>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import {formatPrice} from "~/utils/functions/pricing";
import { useModelStore } from "~/stores/models";
import { useFashionStore } from "~/stores/fashion";

const router = useRouter();

// Stores
const modelStore = useModelStore();
const { selectedModel } = storeToRefs(modelStore);
const fashionStore = useFashionStore();
const { fashion } = storeToRefs(fashionStore);

// set loader default state
let loader = ref(true);

// API request, will be moved to dedicated api location, but for the demo it will stay here.
const fetchFashion = async () => {
    try {
        const response = await axios.get('https://some.url'); // TODO change to actual api url
        fashion.value = response.data;
        loader.value = false;
    } catch (error) { // Fallback  with mock data and shows error in console
        console.error('failed fetching fashion:', error, 'using mock data');
        fashion.value = fashionMock;
        loader.value = false;
    }
}

// Click handler
function clickHandler (item) {
    // Add fashion product to store?
}

// Mock data
const fashionMock = [
    {
        "id": 1,
        "caption": "Aurum Quilted Leather Handbag",
        "image_path": "/images/bags/aurum_quilted_leather.jpg",
        "image": "aurum_quilted_leather.jpg",
        "size": "Medium",
        "brand": "Maison Velluto",
        "price": 3450.00
    },
    {
        "id": 2,
        "caption": "Nocturne Silk Evening Gown",
        "image_path": "/images/dresses/nocturne_silk_evening.jpg",
        "image": "nocturne_silk_evening.jpg",
        "size": "S/M/L",
        "brand": "Éclat Couture",
        "price": 6890.00
    },
    {
        "id": 3,
        "caption": "Vérité Double-Breasted Wool Coat",
        "image_path": "/images/jackets/verite_wool_coat.jpg",
        "image": "verite_wool_coat.jpg",
        "size": "XS/S/M",
        "brand": "Linéa Haute",
        "price": 4120.00
    },
    {
        "id": 4,
        "caption": "Lune Sculpted Platform Heels",
        "image_path": "/images/shoes/lune_platform_heels.jpg",
        "image": "lune_platform_heels.jpg",
        "size": "EU 36–41",
        "brand": "Studio Astra",
        "price": 1280.00
    },
    {
        "id": 5,
        "caption": "Crimson Eclipse Suede Clutch",
        "image_path": "/images/bags/crimson_eclipse_clutch.jpg",
        "image": "crimson_eclipse_clutch.jpg",
        "size": "Small",
        "brand": "Marques d'Or",
        "price": 1950.00
    },
    {
        "id": 6,
        "caption": "Celestia Draped Tulle Dress",
        "image_path": "/images/dresses/celestia_tulle_dress.jpg",
        "image": "celestia_tulle_dress.jpg",
        "size": "S/M",
        "brand": "Atelier Solenne",
        "price": 7200.00
    },
    {
        "id": 7,
        "caption": "Obsidian Tailored Blazer",
        "image_path": "/images/jackets/obsidian_tailored_blazer.jpg",
        "image": "obsidian_tailored_blazer.jpg",
        "size": "S/M/L",
        "brand": "NOIR 7",
        "price": 3850.00
    },
    {
        "id": 8,
        "caption": "Orion Embellished Combat Boots",
        "image_path": "/images/shoes/orion_combat_boots.jpg",
        "image": "orion_combat_boots.jpg",
        "size": "EU 37–42",
        "brand": "Céleste Forge",
        "price": 1550.00
    },
    {
        "id": 9,
        "caption": "Solstice Croc-Embossed Tote",
        "image_path": "/images/bags/solstice_croc_tote.jpg",
        "image": "solstice_croc_tote.jpg",
        "size": "Large",
        "brand": "Maison Velluto",
        "price": 2890.00
    },
    {
        "id": 10,
        "caption": "Velour Moonlight Cape",
        "image_path": "/images/jackets/velour_moonlight_cape.jpg",
        "image": "velour_moonlight_cape.jpg",
        "size": "One Size",
        "brand": "Éclat Couture",
        "price": 4760.00
    }
]

onMounted(fetchFashion); // will fire as soon as you navigate to this page
</script>

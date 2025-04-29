<template>
    <main class="w-full flex justify-center ">
        <div class="container">


            <div
                class="grid grid-cols-2 gap-15px"
            >
                <TileBase
                    v-for="model in models"
                    :url="model.url"
                >
                    test
                </TileBase>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
const models = [
    {
        id: 1,
        url: 'https://placehold.co/400x600/transparent/A28546.png',
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

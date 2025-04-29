<template>
    <main class="w-full flex justify-center">
        <div class="container">
            <h1>{{titles.home.nl}}</h1>
        </div>
    </main>
</template>

<script setup lang="ts">
import {useAssetStore} from "~/stores/asset";

const assetStore = useAssetStore();
const { titles } = storeToRefs(assetStore);
</script>

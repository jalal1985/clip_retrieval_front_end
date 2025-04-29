<template>
    <header class="w-full h-16 flex justify-center bg-sky-500">
        <nav class="container flex items-center">
            <ul class="main-nav">
                <li>
                    <NuxtLink to="/">
                        <!-- TODO the hydration mismatch is weird because house is part of the fas icon pack, disabled server side rendering for now -->
                        <ClientOnly>
                            <FontAwesomeIcon
                                :icon="['fas', 'house']"
                                :size="'xl'"
                                :title="menu.home.nl"
                                alt="menu.home.nl"
                            />
                        </ClientOnly>
                    </NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup lang="ts">
    import { useAssetStore } from "~/stores/asset";
    import { storeToRefs } from "pinia";
    import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

    const assetStore = useAssetStore();
    const { menu } = storeToRefs(assetStore);
</script>

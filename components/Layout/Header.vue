<template>
    <header class="w-full h-16 flex justify-center bg-sky-500">
        <div class="container flex">
            <nav class="flex items-center grow-0">
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

            <div class="flex justify-center items-center grow">
                Logo
            </div>

            <div class="flex items-center grow-0 uppercase pl-1">
                eur
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
    import { useAssetStore } from "~/stores/asset";
    import { storeToRefs } from "pinia";
    import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

    const assetStore = useAssetStore();
    const { menu } = storeToRefs(assetStore);
</script>

import { defineStore } from "pinia";
import { ref, Ref } from 'vue';
import _cloneDeep from "lodash/cloneDeep"
import { AssetStoreInitialState } from "~/types/AssetStoreInitialState";
import {
    AssetStoreMenuLabels,
} from "~/types/AssetStoreInitialState";

export const useAssetStore = defineStore('asset', ()=> {
    const initialState: AssetStoreInitialState = {
        menu: {
            home: {
                nl: 'Home',
                en: 'Home',
            },
            about: {
                nl: 'Over',
                en: 'About',
            },
        },
        titles: {
            home: {
                nl: 'Home',
                en: 'Home',
            },
            about: {
                nl: 'Over',
                en: 'About',
            }
        },
        externalUrls: [
            {
                url: 'https://nuxtjs.org/',
                title: 'Nuxt 3',
            },
            {
                url: 'https://vuejs.org/',
                title: 'Vue 3',
            },
            {
                url: 'https://www.typescriptlang.org/',
                title: 'Typescript',
            },
            {
                url: 'https://tailwindcss.com/',
                title: 'Tailwindcss',
            },
        ]
    };

    /**
     * We need to deep clone the initialState object, otherwise it will be a reference to the initialState object
     * and will be updated when the store is updated which is not what we want if the store ever needs to be reset.
     */
    const menu: Ref<AssetStoreMenuLabels> = ref(
        _cloneDeep(initialState.menu),
    );

    const titles: Ref<AssetStoreInitialState>= ref(
        _cloneDeep(initialState.titles),
    );

    const externalUrls: Ref<AssetStoreInitialState>= ref(
        _cloneDeep(initialState.externalUrls),
    );

    /**
     * Use this reset function to reset the entire store, it will default to values from the initialState above
     */
    function $reset():void {
        menu.value = _cloneDeep(initialState.menu);
    }

    return {
        menu,
        titles,
        externalUrls,
        $reset,
    }
})

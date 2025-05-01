import { defineStore } from "pinia";
import { ref, Ref } from 'vue';
import _cloneDeep from "lodash/cloneDeep"
import {
    FashionStoreInitialState,
} from "~/types/FashionStoreIntialState";

export const useFashionStore = defineStore('fashion', () => {
    const initialState: FashionStoreInitialState = {
        fashion: [
            {
                id: 0,
                caption: '',
                image_path: '',
                image: '',
                size: '',
                brand: '',
                price: '',
            },
        ]
    };

    const fashion: Ref<FashionStoreInitialState> = ref(
        _cloneDeep(initialState.fashion),
    );

    function $reset():void {
        fashion.value = _cloneDeep(initialState.fashion);
    }

    return {
        fashion,
        $reset,
    }
})

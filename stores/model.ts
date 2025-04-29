import { defineStore } from "pinia";
import { ref, Ref } from 'vue';
import _cloneDeep from "lodash/cloneDeep"

import {
    ModelStoreInitialState,
    ModelStoreModels,
} from "~/types/ModelStoreInitialState";


export const useModelStore = defineStore('model', () => {
    const initialState: ModelStoreInitialState = {
        model: [
            {
                id: 0,
                url: '',
                name: '',
            }
        ],
    };

    const model: Ref<ModelStoreModels> = ref(
        _cloneDeep(initialState.model),
    );

    function $reset():void {
        model.value = _cloneDeep(initialState.model);
    }

    return {
        model,
        $reset,
    }
})

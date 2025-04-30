import { defineStore } from "pinia";
import { ref, Ref } from 'vue';
import _cloneDeep from "lodash/cloneDeep"

import {
    ModelStoreInitialState,
    ModelStoreModels,
    SelectedModel
} from "~/types/ModelStoreInitialState";


export const useModelStore = defineStore('model', () => {
    const initialState: ModelStoreInitialState = {
        model: [
            {
                id: null,
                url: '',
                name: '',
            }
        ],
        selectedModel: null,
    };

    const model: Ref<ModelStoreModels> = ref(
        _cloneDeep(initialState.model),
    );

    const selectedModel: Ref<SelectedModel> = ref(
        _cloneDeep(initialState.selectedModel),
    );

    function $reset():void {
        model.value = _cloneDeep(initialState.model);
    }

    return {
        model,
        selectedModel,
        $reset,
    }
})

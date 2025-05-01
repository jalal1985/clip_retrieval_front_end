import { defineStore } from "pinia";
import { ref, Ref } from 'vue';
import _cloneDeep from "lodash/cloneDeep"

import {
    ModelStoreInitialState,
    ModelStoreModels,
    SelectedModel
} from "~/types/ModelStoreInitialState";


export const useModelStore = defineStore('models', () => {
    const initialState: ModelStoreInitialState = {
        models: [
            {
                id: null,
                url: '',
                name: '',
            }
        ],
        selectedModel: {
            id: null,
            name: '',
        },
    };

    // We need to clone the initialState object, otherwise it will be a reference to the initialState object and get
    // updated when the store is updated.
    const models: Ref<ModelStoreModels> = ref(
        _cloneDeep(initialState.models),
    );

    const selectedModel: Ref<SelectedModel> = ref(
        _cloneDeep(initialState.selectedModel),
    );

    function $reset():void {
        models.value = _cloneDeep(initialState.model);
        selectedModel.value = _cloneDeep(initialState.selectedModel);
    }

    return {
        models,
        selectedModel,
        $reset,
    }
})

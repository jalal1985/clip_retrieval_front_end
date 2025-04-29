import { defineStore } from "pinia";
import { ref, Ref } from 'vue';
import _cloneDeep from "lodash/cloneDeep"
import { LocationStoreInitialState } from "~/types/LocationStoreIntialState";
import {
    LocationStoreLocations
} from "~/types/LocationStoreIntialState";

export const useLocationStore = defineStore( 'location', () => {
    const initialState: LocationStoreInitialState = {
        location: [
            {
                title: 'GCS',
                address: 'Adres 1',
                phoneNumber: '1234567890',
            }
        ],
    }

    /**
     * We need to deep clone the initialState object, otherwise it will be a reference to the initialState object
     * and will be updated when the store is updated which is not what we want if the store ever needs to be reset.
     */
    const location: Ref<LocationStoreLocations> = ref (
        _cloneDeep(initialState.location),
    );

    /**
     * Use this reset function to reset the entire store, it will default to values from the initialState above
     */
    function $reset():void {
        location.value = _cloneDeep(intialState.location);
    }

    return {
        location,
        $reset,
    }
})

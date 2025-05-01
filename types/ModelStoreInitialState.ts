export interface ModelStoreModels {
    id: number | null,
    url: string,
    name: string,
}

export interface SelectedModel {
    id: number | null,
    name: string,
}

export interface ModelStoreInitialState {
    models: ModelStoreModels[];
    selectedModel: SelectedModel;
}

export interface ModelStoreModels {
    id: number | null,
    url: string,
    name: string,
}

export interface SelectedModel {
    selectedModel: number | null,
}

export interface ModelStoreInitialState {
    model: ModelStoreModels[];
    selectedModel: SelectedModel;
}

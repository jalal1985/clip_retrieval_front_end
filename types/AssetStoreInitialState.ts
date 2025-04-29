export interface AssetStoreLanguages {
    nl: string;
    en: string;
}
export interface AssetStoreMenuLabels {
    home: AssetStoreLanguages;
    about: AssetStoreLanguages;
}

export interface AssetStoreTitles {
    characters: AssetStoreLanguages;
    about: AssetStoreLanguages;
}

export interface externalUrls {
    url: string;
    title: string;
}

export interface AssetStoreInitialState {
    menu: AssetStoreMenuLabels;
    titles: AssetStoreTitles;
    externalUrls: externalUrls[];
}

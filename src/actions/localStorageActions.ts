import {AppDispatch} from "../store";
import {
    Episode,
    LoadSeasonsData,
    Seasons,
    SetFavoriteEpisodesFromLocalStorage
} from "../interfacesAndTypes";
import {ActionTypes} from "./actionTypes";
import {LocalStoreTypes} from "./localStoreTypes";

export const getSeasonsFromLocalStorage = ()=> async (dispatch: AppDispatch) => {
    const serializedState = localStorage.getItem((LocalStoreTypes.seasons));

    if(serializedState) {
        const season = JSON.parse(serializedState);

        dispatch<LoadSeasonsData>({
            type: ActionTypes.loadSeasonsData,
            payload: season
        });

        return season;

    } else {
        return null;
    }

};

export const getEpisodesDataFromLocalStorage = ()=> async (dispatch: AppDispatch) => {
    const serializedState = localStorage.getItem((LocalStoreTypes.episodes));

    if(serializedState) {
        const episodeData = JSON.parse(serializedState);

        dispatch<any>({
            type: ActionTypes.setEpisodesDataFromLocalStorage,
            payload: episodeData
        });

        return episodeData;
    } else {
        return null;
    }
};

export const saveSeasonsToLocalStorage = (seasonData: Seasons): void  => {
    const serializedState = JSON.stringify(seasonData);
    localStorage.setItem(LocalStoreTypes.seasons, serializedState);
};

export const saveEpisodesToLocalStorage = (episodes: Episode[]): void  => {
    let existingEpisodes = localStorage.getItem((LocalStoreTypes.episodes));

    if(existingEpisodes !== null){
        const existingEpisodesData = JSON.parse(existingEpisodes);
        let allEpisodes = episodes.concat(existingEpisodesData);
        const serializedState = JSON.stringify(allEpisodes);
        localStorage.setItem(LocalStoreTypes.episodes, serializedState);
    } else {
        const serializedState = JSON.stringify(episodes);
        localStorage.setItem(LocalStoreTypes.episodes, serializedState);
    }
};

export const getFavoriteEpisodesFromLocalStorage = () => async (dispatch: AppDispatch) => {
    const serializedState = localStorage.getItem((LocalStoreTypes.favorites));

    if(serializedState) {
        const episodeData = JSON.parse(serializedState);

        dispatch<SetFavoriteEpisodesFromLocalStorage>({
            type: ActionTypes.setFavoriteEpisodesFromLocalStorage,
            payload: episodeData
        });

        return episodeData;
    } else {
        return null;
    }
}

export const saveFavoriteEpisodesToLocalStorage = (episode: Episode): void  => {
    let existingEpisodes = localStorage.getItem((LocalStoreTypes.favorites));

    if(existingEpisodes !== null){
        const existingEpisodesData = JSON.parse(existingEpisodes);

        existingEpisodesData.push(episode);

        const serializedState = JSON.stringify(existingEpisodesData);
        localStorage.setItem(LocalStoreTypes.favorites, serializedState);
    } else {
        const serializedState = JSON.stringify([episode]);
        localStorage.setItem(LocalStoreTypes.favorites, serializedState);
    }
};

export const removeFavoriteEpisodesToLocalStorage = (episode: Episode): void  => {
    let existingEpisodes = localStorage.getItem((LocalStoreTypes.favorites));

    if(existingEpisodes !== null){
        const existingEpisodesData = JSON.parse(existingEpisodes);

        let filteredArray = existingEpisodesData.filter(function(existingEpisode: Episode) {
            return existingEpisode.id !== episode.id;
        });

        const serializedState = JSON.stringify(filteredArray);
        localStorage.setItem(LocalStoreTypes.favorites, serializedState);
    }
};

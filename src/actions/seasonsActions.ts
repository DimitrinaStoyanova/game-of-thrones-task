import {AppDispatch} from "../store";
import {getAxiosWithToken} from "../utils/serverApi";
import {
    Episode,
    EpisodeData,
    LoadFilteredEpisodesData,
    LoadSeasonsData,
    RemoveEpisodesFromFavorites,
    SaveEpisodesToFavorites,
    SearchEpisodes,
    Seasons,
    SeasonsDataFilterFields
} from "../interfacesAndTypes";
import {ActionTypes} from "./actionTypes";
import {API_KEY, TV_SERIAL_ID} from "../utils/constants";
import {
    saveEpisodesToLocalStorage,
    saveFavoriteEpisodesToLocalStorage,
    saveSeasonsToLocalStorage
} from "./localStorageActions";

export const getSeasons = () => async (dispatch: AppDispatch) => {
    const response = await getAxiosWithToken().get<Seasons>(
        `/Title/${API_KEY}/${TV_SERIAL_ID}`
    );
    dispatch<LoadSeasonsData>({
        type: ActionTypes.loadSeasonsData,
        payload: response.data
    });

    saveSeasonsToLocalStorage(response.data);

    return response.data;
};

export const getEpisodesBySeason = (season: string | number) => async (dispatch: AppDispatch) => {
    const response = await getAxiosWithToken().get<EpisodeData>(
        `/SeasonEpisodes/${API_KEY}/${TV_SERIAL_ID}/${season}`
    );

    dispatch<any>({
        type: ActionTypes.loadEpisodesData,
        payload: response.data.episodes
    });

    saveEpisodesToLocalStorage(response.data.episodes);

    return response.data
};

export const searchEpisodeByName = (filterValues: SeasonsDataFilterFields) =>
    async (dispatch: AppDispatch) => {
        // const response = await getAxiosWithToken().get<SearchEpisodes>(
        //     `/AdvancedSearch/${API_KEY}/?imdbID=${TV_SERIAL_ID}&title=${filterValues.name}`
        // );

        const response = await getAxiosWithToken().get<SearchEpisodes>(
            `/SearchEpisode/${API_KEY}/${filterValues.name}`
        );

        //TODO --- maybe next time I will finish this


        // dispatch<LoadFilteredEpisodesData>({
        //     type: ActionTypes.loadFilteredEpisodesData,
        //     payload: response.data
        // });
    };

export const saveToFavorites = (episode: Episode)=> async (dispatch: AppDispatch) => {
    dispatch<SaveEpisodesToFavorites>({
        type: ActionTypes.saveEpisodesToFavorites,
        payload: episode
    });

    saveFavoriteEpisodesToLocalStorage(episode);
};

export const removeFromFavorites = (episode: Episode)=> async (dispatch: AppDispatch) => {
    dispatch<RemoveEpisodesFromFavorites>({
        type: ActionTypes.removeEpisodesFromFavorites,
        payload: episode
    });
};

import { ActionTypes } from '../actions/actionTypes';
import { LOADER_TYPES } from '../utils/constants';
import {Episode, EpisodeData, Seasons} from "./seasonsInterfaces";
import {SearchEpisodes} from "./filtersInterfaces";
import {User} from "./userInterfaces";

export interface Login {
  type: ActionTypes.login;
  payload: User;
}

export interface Logout {
  type: ActionTypes.logout;
}

export interface ClearReducers {
  type: ActionTypes.clearReducer;
}

export interface LoadToken {
  type: ActionTypes.loadToken;
  payload: string;
}

export interface StartLoader {
  type: ActionTypes.startLoader;
  payload: keyof typeof LOADER_TYPES;
}

export interface StopLoader {
  type: ActionTypes.stopLoader;
  payload: keyof typeof LOADER_TYPES;
}

export interface StopLoaderImmediately {
  type: ActionTypes.stopLoaderImmediately;
  payload: keyof typeof LOADER_TYPES;
}

export interface StopLoaderImmediately {
  type: ActionTypes.stopLoaderImmediately;
  payload: keyof typeof LOADER_TYPES;
}

export interface LoadSeasonsData {
  type: ActionTypes.loadSeasonsData;
  payload: Seasons;
}

export interface LoadEpisodesData {
  type: ActionTypes.loadEpisodesData;
  payload: Episode[];
}

export interface SetEpisodesDataFromLocalStorage {
  type: ActionTypes.setEpisodesDataFromLocalStorage;
  payload: Episode[];
}

export interface LoadFilteredEpisodesData {
  type: ActionTypes.loadFilteredEpisodesData;
  payload: SearchEpisodes;
}

export interface SaveEpisodesToFavorites {
  type: ActionTypes.saveEpisodesToFavorites;
  payload: Episode;
}

export interface SetFavoriteEpisodesFromLocalStorage {
  type: ActionTypes.setFavoriteEpisodesFromLocalStorage;
  payload: Episode[];
}

export interface RemoveEpisodesFromFavorites {
  type: ActionTypes.removeEpisodesFromFavorites;
  payload: Episode;
}
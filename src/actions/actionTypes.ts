import {
  ClearReducers,
  LoadToken,
  Login,
  StartLoader,
  StopLoader,
  StopLoaderImmediately,
  LoadSeasonsData,
  LoadEpisodesData,
  LoadFilteredEpisodesData,
  SaveEpisodesToFavorites,
  RemoveEpisodesFromFavorites,
  SetEpisodesDataFromLocalStorage,
  SetFavoriteEpisodesFromLocalStorage
} from '../interfacesAndTypes/actionInterfaces';

export enum ActionTypes {
  login,
  logout,
  loadToken,
  clearReducer,
  startLoader,
  stopLoader,
  stopLoaderImmediately,
  loadSeasonsData,
  loadEpisodesData,
  setEpisodesDataFromLocalStorage,
  loadFilteredEpisodesData,
  saveEpisodesToFavorites,
  setFavoriteEpisodesFromLocalStorage,
  removeEpisodesFromFavorites
}

export type Action =
  | Login
  | ClearReducers
  | LoadToken
  | StartLoader
  | StopLoader
  | StopLoaderImmediately
  | LoadSeasonsData
  | LoadEpisodesData
  | SetEpisodesDataFromLocalStorage
  | LoadFilteredEpisodesData
  | SaveEpisodesToFavorites
  | SetFavoriteEpisodesFromLocalStorage
  | RemoveEpisodesFromFavorites;

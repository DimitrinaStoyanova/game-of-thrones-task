import {combineReducers} from 'redux';
import userReducer from './userReducer';
import tokenReducer from './tokenReducer';
import {Loader} from './loaderReducer';
import loaderReducer from './loaderReducer';
import {
    SeasonsReducer,
    User
} from '../interfacesAndTypes';
import seasonsReducer from "./seasonsReducer";

export interface StoreState {
    account: User;
    loader: Loader;
    token: string;
    seasonsData: SeasonsReducer
}

export default combineReducers<StoreState>({
    account: userReducer,
    loader: loaderReducer,
    token: tokenReducer,
    seasonsData: seasonsReducer,
});

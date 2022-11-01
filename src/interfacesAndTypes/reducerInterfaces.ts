import {Episode, Seasons} from "./seasonsInterfaces";
import {SeasonsDataFilterFields} from "./filtersInterfaces";

export interface SeasonsReducer {
    seasons: Seasons;
    episodes: Episode[];
    favorites: Episode[];
    filterFields: SeasonsDataFilterFields;
}

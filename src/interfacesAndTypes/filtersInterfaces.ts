import {Episode} from "./seasonsInterfaces";

export interface SeasonsDataFilterFields {
    name: string | null;
}


export interface SearchResult {
    errorMessage: string;
    expression: string;
    searchType: string;
}

export interface SearchEpisodes extends SearchResult {
    results: Episode[];
}
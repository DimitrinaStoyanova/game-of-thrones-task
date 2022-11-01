import {Actor, IdAndName, KeyAndValue, Similar} from "./commonInterfaces";

export interface SeasonsFields {
    id: string | null;
    title: string | null,
    originalTitle: string | null,
    fullTitle: string | null,
    type: string,
    year: string,
    image: string,
    releaseDate: string,
    runtimeMins: string | null,
    runtimeStr:  string | null,
    plot: string | null;
    plotLocal: string | null,
    plotLocalIsRtl: string | null,
    awards: string | null
    directors: string | null,
    directorList: string[] | null,
    writers: string,
    writerList: [],
    stars: string | null,
    starList: IdAndName[],
    actorList: Actor[],
    fullCast: string | null,
    genres: string | null,
    genreList: KeyAndValue[],
    companies: string | null,
    companyList: KeyAndValue[],
    countries: string | null,
    countryList: KeyAndValue[],
    languages: string | null,
    languageList: KeyAndValue[],
    contentRating: string | null,
    imDbRating: string | null,
    imDbRatingVotes: string | null,
    metacriticRating: string | null,
    ratings: string | null,
    wikipedia: string | null,
    posters: [] | null,
    images: [] | null,
    trailer: string | null,
    boxOffice: {
        budget: string | null,
        openingWeekendUSA: string | null,
        grossUSA: string | null,
        cumulativeWorldwideGross: string | null
    },
    tagline: string | null,
    keywords: string | null,
    keywordList: string[],
    similars: Similar[],
    tvSeriesInfo: {
        yearEnd: string | null,
        creators: string | null,
        creatorList: IdAndName[],
        seasons: string[]
    },
    tvEpisodeInfo: null,
    errorMessage: null
}

export interface Seasons {
    id: string | null;
    title: string | null;
    originalTitle: string | null;
    fullTitle: string | null;
    type: string;
    year: string;
    image: string;
    releaseDate: string;
    runtimeMins: string | null;
    runtimeStr:  string | null;
    plot: string | null;
    plotLocal: string | null;
    plotLocalIsRtl: string | null;
    awards: string | null
    directors: string | null;
    directorList: string[] | null;
    writers: string;
    writerList: [];
    stars: string | null;
    starList: IdAndName[];
    actorList: Actor[];
    fullCast: string | null;
    genres: string | null;
    genreList: KeyAndValue[];
    companies: string | null;
    companyList: KeyAndValue[];
    countries: string | null;
    countryList: KeyAndValue[];
    languages: string | null;
    languageList: KeyAndValue[];
    contentRating: string | null;
    imDbRating: string | null;
    imDbRatingVotes: string | null;
    metacriticRating: string | null;
    ratings: string | null;
    wikipedia: string | null;
    posters: [] | null;
    images: [] | null;
    trailer: string | null;
    boxOffice: {
        budget: string | null;
        openingWeekendUSA: string | null;
        grossUSA: string | null;
        cumulativeWorldwideGross: string | null
    };
    tagline: string | null;
    keywords: string | null;
    keywordList: string[];
    similars: Similar[];
    tvSeriesInfo: {
        yearEnd: string | null;
        creators: string | null;
        creatorList: IdAndName[];
        seasons: string[]
    };
    tvEpisodeInfo: null;
    errorMessage: null
}

export interface Episode {
    id: string;
    title: string;
    seasonNumber: string;
    episodeNumber:string;
    image:string;
    year: string;
    released: string;
    plot: string;
    imDbRating:string;
    imDbRatingCount: string;
}

export interface EpisodeData {
    imDbId: string | null;
    title: string | null;
    fullTitle: string | null;
    type: string | null;
    year: string | null;
    episodes: Episode[];
}

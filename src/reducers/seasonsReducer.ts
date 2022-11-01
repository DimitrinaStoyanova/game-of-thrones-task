import {Seasons, SeasonsDataFilterFields, SeasonsReducer} from '../interfacesAndTypes';
import {Action, ActionTypes} from '../actions/actionTypes';
import {EMPTY_STRING} from "../utils/constants";

const initialSeasonsState: Seasons = {
    id: null,
    title: null,
    originalTitle: null,
    fullTitle: null,
    type: EMPTY_STRING,
    year: EMPTY_STRING,
    image: EMPTY_STRING,
    releaseDate: EMPTY_STRING,
    runtimeMins: null,
    runtimeStr: null,
    plot: null,
    plotLocal: null,
    plotLocalIsRtl: null,
    awards: null,
    directors: null,
    directorList: null,
    writers: EMPTY_STRING,
    writerList: [],
    stars: null,
    starList: [],
    actorList: [],
    fullCast: null,
    genres: null,
    genreList: [],
    companies: null,
    companyList: [],
    countries: null,
    countryList: [],
    languages: null,
    languageList: [],
    contentRating: null,
    imDbRating: null,
    imDbRatingVotes: null,
    metacriticRating: null,
    ratings: null,
    wikipedia: null,
    posters: [],
    images: [],
    trailer: null,
    boxOffice: {
        budget: null,
        openingWeekendUSA: null,
        grossUSA: null,
        cumulativeWorldwideGross: null
    },
    tagline: null,
    keywords: null,
    keywordList: [],
    similars: [],
    tvSeriesInfo: {
        yearEnd: null,
        creators: null,
        creatorList: [],
        seasons: []
    },
    tvEpisodeInfo: null,
    errorMessage: null
};


const initialFilter: SeasonsDataFilterFields = {
    name: null
}

const initialState: SeasonsReducer = {
    seasons: initialSeasonsState,
    episodes: [],
    favorites: [],
    filterFields: initialFilter
};

export default function seasonsReducer(
    state: SeasonsReducer = {...initialState},
    action: Action
) {
    if (action.type === ActionTypes.loadSeasonsData) {
        state = {...state, seasons: action.payload};
        return {...state};
    } else if (action.type === ActionTypes.loadEpisodesData) {
        let mergedData = [...state.episodes, ...action.payload].filter((value, index, self) => index === self.findIndex((t) => (t.id === value.id)))
        state = {...state, episodes: mergedData};
        return state;
    } else if (action.type === ActionTypes.setEpisodesDataFromLocalStorage) {
        state = {...state, episodes: action.payload};
        return state;
    } else if (action.type === ActionTypes.loadFilteredEpisodesData) {
        state = {...state, episodes: action.payload.results};
        return state;
    } else if (action.type === ActionTypes.saveEpisodesToFavorites) {
        state.favorites = [...state.favorites, action.payload];
        return state;
    } else if (action.type === ActionTypes.setFavoriteEpisodesFromLocalStorage) {
        state = {...state, favorites: action.payload};
        return state;
    } else if (action.type === ActionTypes.removeEpisodesFromFavorites) {
        let filteredArray = state.favorites.filter(function( episodes ) {
            return episodes.id !== action.payload.id;
        });
        state = {...state, favorites: filteredArray};
        return state;
    } else if (action.type === ActionTypes.clearReducer) {
        state = {...initialState};
        return state;
    }
    return state;
}

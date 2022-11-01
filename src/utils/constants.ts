
export const API_KEY = 'k_nc9ffsn2';
export const TV_SERIAL = 'Game of Thrones'
export const TV_SERIAL_ID = 'tt0944947'

export const URLS = {
  IMDB_SERVER: 'https://imdb-api.com/en/API'
  // IMDB_SERVER: process.env.REACT_APP_BACK_END_BASE_URL
};

export const LOADER_TYPES = {
  GLOBAL_LOADER: 'GLOBAL_LOADER',
};

export const EMPTY_STRING: string = '';

const prefix = '';

export const PAGES_PATHS = {
  HOME: prefix + '/seasons',
  REGISTER: prefix + '/register',
  PROFILE: prefix + '/profile',
  SEASONS: prefix + '/seasons',
  EPISODE: prefix + '/seasons/:id/episode/:episodeId',
  FAVORITE_EPISODES: prefix + '/favorite',
  ERROR_500: prefix + '/500',
  ERROR_404: prefix + '/404',
  ERROR_UNHANDLED: prefix + '/unhandled-error',
};

export const FIELD_NAMES = {
  NAME: 'name',
  FIRST_NAME: 'firstName',
  LAST_NAME: 'lastName',
  EMAIL: 'email',
  PASSWORD: 'password',
  REPEAT_PASSWORD: 'repeatPassword',
  TAC: 'tac'
};

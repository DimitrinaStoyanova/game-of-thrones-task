import axios, { Axios, AxiosError } from 'axios';
import { LOADER_TYPES, PAGES_PATHS, URLS } from './constants';
import { store } from '../store';
import {
  logout,
  startLoading,
  stopLoading,
  stopLoadingImmediately,
} from '../actions';
import i18n from '../i18n';
import navigationUtils from './navUtils';
import { LocalStoreTypes } from '../actions/localStoreTypes';

interface Error {
  status: number;
  message: string;
}

const getDefaultHeaders = () => {
  return {
    'Content-Type': 'application/json',
    'Accept-Language': 'en',
  };
};

const getMultipartHeaders = () => {
  return {
    'Content-Type': 'multipart/form-data',
  };
};

export const getAxiosWithToken = (
  isMultipartFormData: boolean = false,
  showLoader: boolean = true,
) => {

  let instance = axios.create({
    baseURL: URLS.IMDB_SERVER,
    headers: {
      ...(isMultipartFormData ? getMultipartHeaders() : getDefaultHeaders()),
      Authorization: localStorage.getItem(LocalStoreTypes.token)!,
    },
  });

  return configureAxios(instance, showLoader);
};

const configureAxios = (axiosInstance: Axios, showLoader: boolean) => {
  axiosInstance.interceptors.request.use(
    (config) => {
      if (showLoader) {
        store.dispatch<any>(startLoading(LOADER_TYPES.GLOBAL_LOADER));
      }
      return config;
    },
    (error) => {
      if (showLoader) {
        store.dispatch<any>(stopLoadingImmediately(LOADER_TYPES.GLOBAL_LOADER));
      }
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      store.dispatch<any>(stopLoading(LOADER_TYPES.GLOBAL_LOADER));
      // serverValidationErrorHandling(response, serverValidationErrorCallback);
      return response;
    },
    (error) => {
      store.dispatch<any>(stopLoadingImmediately(LOADER_TYPES.GLOBAL_LOADER));
      // store.dispatch(closeModal());
      serverDefaultErrorHandling(error);

      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

const serverDefaultErrorHandling = (error: AxiosError<Error>) => {
  if (!error.response) {
    navigationUtils.navigate(PAGES_PATHS.ERROR_UNHANDLED);
    return;
  } else if (error.response.status === 406) {
    store.dispatch<any>(
      alert(i18n.t('translation:common.errors.error') + ' ' + error.response.data.message)
    );
  } else if (error.response.status === 404) {
    navigationUtils.navigate(PAGES_PATHS.ERROR_404);
    return;
  } else if (error.response.status === 401) {
    store.dispatch<any>(logout());
    return;
  } else if (error.response.status === 500) {
    navigationUtils.navigate(PAGES_PATHS.ERROR_500);
    return;
  } else {
    navigationUtils.navigate(PAGES_PATHS.ERROR_UNHANDLED);
    return;
  }
};

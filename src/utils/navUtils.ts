import { Location } from 'react-router-dom';
import { history } from '../index';
import { EMPTY_STRING } from './constants';

const getRoute = (): string => history.location.pathname;

const getQueryStringParam = (paramName: string, url: Location): string => {
  const paramValue = new URLSearchParams(url.search).get(paramName);
  return paramValue ? paramValue : EMPTY_STRING;
};

const isCurrentPage = (relativePageUrl: string): boolean =>
  getRoute().includes(relativePageUrl);

const navigate = (path: string, data?: any, query: any = null): void => {
  if (query) {
    history.push(
      {
        pathname: path,
        search:
          '?' +
          JSON.stringify(query)
            .replaceAll('"', '')
            .replaceAll('{', '')
            .replaceAll('}', '')
            .replaceAll(':', '=')
            .replaceAll(',', '&'),
      },
      data
    );
  } else {
    history.push({
      pathname: path,
      search: data,
    });
  }
};

const goBack = (): void => history.back();

const setHttpPrefix = (url: string): string => {
  if (!url.match(/^https?:\/\//i)) {
    url = 'http://' + url;
  }

  return url;
};

const navigationUtils = {
  getRoute,
  getQueryStringParam,
  isCurrentPage,
  navigate,
  goBack,
  setHttpPrefix,
};

export default navigationUtils;

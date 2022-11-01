import {
  User
} from '../interfacesAndTypes';

export const isEmptyObject = (param: object): boolean => {
  if (!param) {
    return true;
  }

  return Object.keys(param).length === 0;
};

export const isAllNull = (object: {}) => {
  return Object.values(object).every((x) => x === null || x === '');
};

export const isEmptyArray = (array: any[]) => {
  return array && array.length === 0;
};

export const isUserLoggedIn = (user: User): boolean => {
  return !!user.email;
};

export const isValidEmail = (email: string) => {
  const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailPattern.test(email);
};

export default {
  isEmptyObject,
  isUserLoggedIn,
  isValidEmail
};

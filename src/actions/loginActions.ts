import { getAxiosWithToken } from '../utils/serverApi';
import {  ActionTypes } from './actionTypes';
import {Episode, LoginFields, User, UserData} from '../interfacesAndTypes';
import { LocalStoreTypes } from './localStoreTypes';
import { Dispatch } from 'redux';
import {
  ClearReducers,
  LoadToken,
  Login,
  Logout,
} from '../interfacesAndTypes/actionInterfaces';
import { AppDispatch, store } from '../store';
import commonUtils from '../utils/commonUtils';
import { toast } from 'react-toastify';
import i18n from 'i18next';
import navigationUtils from "../utils/navUtils";
import {PAGES_PATHS} from "../utils/constants";

export const setCurrentUserToLocalStore = (currentUser: User): void =>
  localStorage.setItem(LocalStoreTypes.user, JSON.stringify(currentUser));

const removeCurrentUserFromLocalStore = (): void =>
  localStorage.removeItem(LocalStoreTypes.user);

export const loadCurrentUserFromLocalStore =
  () => async (dispatch: Dispatch) => {
    const userDataInJson = localStorage.getItem(LocalStoreTypes.user);
    const account =
      userDataInJson != null ? await JSON.parse(userDataInJson) : null;
    if (account) {
      dispatch<Login>({ type: ActionTypes.login, payload: account });
    }
  };

export const isUserAuthenticated = (): boolean => {
  return commonUtils.isUserLoggedIn(store.getState().account);
};

export const loadTokenFromLocalStore = () => async (dispatch: Dispatch) => {
  const token = localStorage.getItem(LocalStoreTypes.token);
  if (token) {
    dispatch<LoadToken>({ type: ActionTypes.loadToken, payload: token });
  }
};

export const login = (data: LoginFields) => async (dispatch: AppDispatch) => {
  let user = {
    id: 1,
    firstName: "Emilia",
    lastName: "Clarke",
    email: data.email
  }

  const message = i18n.t('common.messages.loginSuccessfully');
  toast.success(message);

  setCurrentUserToLocalStore(user);

  dispatch<Login>({
    type: ActionTypes.login,
    payload: user
  });

};

export const register = (data: User) => async (dispatch: AppDispatch) => {
  const message = i18n.t('common.messages.loginSuccessfully');
  toast.success(message);

  setCurrentUserToLocalStore(data);

  dispatch<Login>({
    type: ActionTypes.login,
    payload: data
  });
};

export const updateUser = (data: User) => async (dispatch: Dispatch) => {
  setCurrentUserToLocalStore(data);
  const message = i18n.t('common.messages.savedSuccessfully');
  toast.success(message);

  navigationUtils.navigate(PAGES_PATHS.SEASONS);
};

export const logout = () => async (dispatch: Dispatch) => {
  removeCurrentUserFromLocalStore();

  dispatch<Logout>({
    type: ActionTypes.logout,
  });

  dispatch<ClearReducers>({
    type: ActionTypes.clearReducer,
  });
};

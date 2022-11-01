import React, { useEffect } from 'react';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';

import { Unauthenticated } from './Unauthenticated';
import { useAppSelector } from '../../hooks';
import { StoreState } from '../../reducers';
import { history } from '../../index';
import { NavigationBar } from '../NavigationBar';
import { MainNavigation } from './MainNavigation';
import {
  loadCurrentUserFromLocalStore,
  loadTokenFromLocalStore,
} from '../../actions/index';
import { LocalStoreTypes } from '../../actions/localStoreTypes';

export const App = (): JSX.Element => {
  const account = useAppSelector((state: StoreState) => state.account);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadTokenFromLocalStore());
    dispatch(loadCurrentUserFromLocalStore());
  }, []);

  const isUserLoggedIn = !!localStorage.getItem(LocalStoreTypes.user);

  const getRoutes = (): JSX.Element => {
    if (isUserLoggedIn) {
      return (
        <div className='app-container'>
          <NavigationBar />
          <div className='content-container'>
            <MainNavigation />
          </div>
        </div>
      );
    }
    return <Unauthenticated />;
  };

  return <HistoryRouter history={history}>{getRoutes()}</HistoryRouter>;
};

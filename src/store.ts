import {configureStore} from '@reduxjs/toolkit';
import reducers, {StoreState} from './reducers/index';
import thunk from 'redux-thunk';
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

export const store = configureStore({
  reducer: reducers,
  middleware: [thunk],
  devTools: true,
});

export type RootState = ReturnType<typeof reducers>;

export type AppDispatch = ThunkDispatch<StoreState, any, AnyAction>;

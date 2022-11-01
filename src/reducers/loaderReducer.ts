import { Action, ActionTypes } from '../actions/actionTypes';
import { LOADER_TYPES } from '../utils/constants';

export type Loader = { [key in keyof typeof LOADER_TYPES]: number };

const initialState: Loader = {
  GLOBAL_LOADER: 0,
};

export default function loaderReducer(
  state: Loader = { ...initialState },
  action: Action
) {
  if (action.type === ActionTypes.startLoader) {
    state[action.payload] += 1;
    return { ...state };
  }

  if (action.type === ActionTypes.stopLoader) {
    state[action.payload] -= 1;
    return { ...state };
  }

  if (action.type === ActionTypes.stopLoaderImmediately) {
    state[action.payload] = 0;
    return { ...state };
  }

  return state;
}

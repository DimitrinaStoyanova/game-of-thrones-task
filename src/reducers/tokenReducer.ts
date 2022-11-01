import { Action, ActionTypes } from '../actions/actionTypes';

const initialState: string = '';

export default function tokenReducer(
  state: string = initialState,
  action: Action
) {
  if (action.type === ActionTypes.loadToken) {
    state = action.payload;
    return state;
  }
  return state;
}

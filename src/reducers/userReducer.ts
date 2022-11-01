import { User } from '../interfacesAndTypes';
import { Action, ActionTypes } from '../actions/actionTypes';

const initialState: User = {
  id: null,
  firstName: '',
  lastName: '',
  email: '',
};

export default function userReducer(
  state: User = { ...initialState },
  action: Action
) {
  if (action.type === ActionTypes.login) {
    state = { ...action.payload };
    return { ...state };
  } else if (action.type === ActionTypes.clearReducer) {
    state = { ...initialState };
    return state;
  }
  return state;
}

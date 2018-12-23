import { LOGIN, LOGOUT } from '../actions/appAction';
import { Action } from '@ngrx/store';
import { User } from '../../models/user';
import * as UserActions from '../actions/appAction';

const INITIAL_STATE: User = {
    name: 'Guest',
    password: '12345',
    login: false,
};

export function reducer(state: User = INITIAL_STATE, action: UserActions.Actions): User {
  switch (action.type) {
      case UserActions.LOGIN:
          return {
            ...state,
            name: action.payload.name,
            password: action.payload.password,
            login: true
          };
      case UserActions.LOGOUT:
        return {
            ...state,
            name: INITIAL_STATE.name,
            password: INITIAL_STATE.password,
            login: false
          };
      default:
        return state;
  }
}

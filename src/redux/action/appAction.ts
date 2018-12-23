import { Action } from '@ngrx/store';
import { User } from '../../models/user';
import { Injectable } from '@angular/core';

export const LOGOUT = 'LOGOUT';
export const LOGIN = ' LOGIN';

export class Login implements Action {
  readonly type = LOGIN;

  constructor(public payload: User) { }
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export type Actions = Logout | Login;

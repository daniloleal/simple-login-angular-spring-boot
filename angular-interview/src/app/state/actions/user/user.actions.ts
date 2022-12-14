import { Action } from '@ngrx/store';
import { User } from '../../../models/user';

export enum UserActionTypes {
    LOGIN = '[User] LOGIN',
    LOGIN_COMPLETE = '[User] LOGIN_COMPLETE',
    LOGIN_ERROR = '[User] LOGIN_ERROR',
    REGISTER = '[User] REGISTER',
    REGISTER_COMPLETE = '[User] REGISTER_COMPLETE',
    REGISTER_ERROR = '[User] REGISTER_ERROR',
}
export class LoginAction implements Action {
    readonly type = UserActionTypes.LOGIN;
    constructor(public payload: User) { }
}
export class LoginCompleteAction implements Action {
    readonly type = UserActionTypes.LOGIN_COMPLETE;
    constructor(public payload: User) { }
}
export class LoginErrorAction implements Action {
    readonly type = UserActionTypes.LOGIN_ERROR;
    constructor(public payload: any) { }
}
export class RegisterAction implements Action {
    readonly type = UserActionTypes.REGISTER;
    constructor(public payload: User) { }
}
export class RegisterCompleteAction implements Action {
    readonly type = UserActionTypes.REGISTER_COMPLETE;
    constructor(public payload: User) { }
}
export class RegisterErrorAction implements Action {
    readonly type = UserActionTypes.REGISTER_ERROR;
    constructor(public payload: any) { }
}
export type UserActions
    = LoginAction
    | LoginCompleteAction
    | LoginErrorAction
    | RegisterAction
    | RegisterCompleteAction
    | RegisterErrorAction;
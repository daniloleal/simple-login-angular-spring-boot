import { UserActions, UserActionTypes } from "./user.actions";
import { initialState, State } from './user.state';

export function userReducer(state = initialState, action: UserActions): State {
    switch (action.type) {
        case UserActionTypes.LOGIN:
            return {
                ...state,
                hasError: false,
                errorMessage: null,
                isLoading: true
            };
        case UserActionTypes.LOGIN_COMPLETE:
            return {
                ...state,
                loggedIn: true,
                user: action.payload,
                isLoading: false,
            };
        case UserActionTypes.LOGIN_ERROR:
            return {
                ...state,
                errorMessage: action.payload,
                hasError: true,
                isLoading: false,
            };
        case UserActionTypes.REGISTER:
            return {
                ...state,
                hasError: false,
                errorMessage: null,
                isLoading: true
            };
        case UserActionTypes.REGISTER_COMPLETE:
            return {
                ...state,
                loggedIn: true,
                user: action.payload,
                isLoading: false,
            };
        case UserActionTypes.REGISTER_ERROR:
            return {
                ...state,
                errorMessage: action.payload,
                hasError: true,
                isLoading: false,
            };
        default:
            return state;
    }
}

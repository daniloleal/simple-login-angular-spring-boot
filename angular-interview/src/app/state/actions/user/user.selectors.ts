import { State } from './user.state';

export const getLoggedIn = (state: State): any => { return { loggedIn: state.loggedIn }; };
export const selectUser = (state: State): any => { return { user: state.user }; };
export const errorMessage = (state: State): any => { return { errorMessage: state.errorMessage }; };
export const hasError = (state: State): any => { return { hasError: state.hasError }; };
export const isLoading = (state: State): any => { return { isLoading: state.isLoading }; };

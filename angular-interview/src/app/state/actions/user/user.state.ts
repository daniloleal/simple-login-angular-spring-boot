import { User } from "src/app/models/user";

export interface State {
    user: User | null;
    loggedIn: boolean;
    isLoading: boolean;
    errorMessage: string | null;
    hasError: boolean;
}

export const initialState: State = {
    user: null,
    loggedIn: false,
    isLoading: false,
    errorMessage: null,
    hasError: false,
};


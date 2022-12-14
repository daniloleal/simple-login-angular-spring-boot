import { LoginAction, LoginCompleteAction, LoginErrorAction, RegisterCompleteAction, RegisterErrorAction, UserActionTypes } from "./user.actions";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthService } from "src/app/services/auth.service";

@Injectable()
export class UserStoreEffects {
    constructor(
        private authService: AuthService,
        private actions$: Actions,
    ) { }

    @Effect()
    login$: Observable<Action> = this.actions$.pipe(
        ofType<LoginAction>(UserActionTypes.LOGIN),
        switchMap((action: any) => {
            return this.authService.login(action.payload)
                .pipe(
                    map((user: any) => (
                        new LoginCompleteAction(user)
                    )),
                    catchError(error =>
                        of(new LoginErrorAction({ error }))),
                );
        }),

    );

    @Effect()
    signup$: Observable<Action> = this.actions$.pipe(
        ofType<LoginAction>(UserActionTypes.REGISTER),
        switchMap((action: any) => {
            return this.authService.register(action.payload)
                .pipe(
                    map((user: any) => (
                        new RegisterCompleteAction(user)
                    )),
                    catchError(error =>
                        of(new RegisterErrorAction({ error }))),
                );
        }),
        catchError(error =>
            of(new RegisterErrorAction({ error }))),
    );
}

import { Component, OnInit } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { UserStoreSelectors, UserStoreState } from 'src/app/state/actions/user';
import { RegisterAction, UserActionTypes } from 'src/app/state/actions/user/user.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  
  isLoading$: Observable<any>;
  errorMessage$: Observable<any>;
  hasError$: Observable<any>;
  private unsubscribe: Subject<void> = new Subject();

  constructor(private store: Store<UserStoreState.State>) {

    this.isLoading$ = this.store.select(UserStoreSelectors.isLoading);
    this.errorMessage$ = this.store.select(UserStoreSelectors.errorMessage);
    this.hasError$ = this.store.select(UserStoreSelectors.hasError);
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    this.store.dispatch(new RegisterAction(this.form));
  }

}

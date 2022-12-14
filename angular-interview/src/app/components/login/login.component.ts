import { Component, OnInit } from '@angular/core';
import { LoginAction } from 'src/app/state/actions/user/user.actions';
import { select, Store } from '@ngrx/store';
import { UserStoreSelectors, UserStoreState } from 'src/app/state/actions/user';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

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
    this.store.dispatch(new LoginAction(this.form));
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { UserStoreModule } from './actions/user/user-store.module';
import { EffectsModule } from '@ngrx/effects';
import { UserStoreEffects } from './actions/user/user.effects';
import { userReducer } from './actions/user/user.reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserStoreModule,
    StoreModule.forRoot(userReducer, {}),
    EffectsModule.forRoot([UserStoreEffects])
  ]
})
export class RootStoreModule { }

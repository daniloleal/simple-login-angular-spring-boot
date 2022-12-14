import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { UserStoreEffects } from './user.effects';
import { userReducer } from './user.reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('user', userReducer),
        EffectsModule.forFeature([UserStoreEffects]),
    ],
    providers: [UserStoreEffects],
})
export class UserStoreModule {}

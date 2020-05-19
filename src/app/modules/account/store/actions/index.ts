import { createAction, props } from '@ngrx/store';

export const UpdateBalanceAction = createAction(
    'update account',
    props<{ balance: number }>()
);

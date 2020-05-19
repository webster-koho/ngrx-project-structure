import { createReducer, on } from '@ngrx/store';
import * as AccountActions from '../actions';

export interface State {
    balance: number;
}

export const initialState: State = {
    balance: 0,
};

export const reducer = createReducer(
    initialState,
    on(AccountActions.UpdateBalanceAction, (state, action) => {
        return {
            ...state,
            balance: action.balance,
        };
    })
);

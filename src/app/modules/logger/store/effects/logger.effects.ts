import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { LogAction } from '../actions/logger.actions';
import { tap, map } from 'rxjs/operators';

@Injectable()
export class LoggerEffects {
    constructor(private actions$: Actions) {}

    @Effect({ dispatch: false })
    log$ = this.actions$.pipe(
        ofType(LogAction),
        map((action) => action.event),
        tap(console.log)
    );
}

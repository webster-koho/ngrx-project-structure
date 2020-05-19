import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { LogAction } from '../store/actions/logger.actions';

@Injectable({
    providedIn: 'root',
})
export class LoggerService {
    constructor(private store: Store<any>) {}

    public log(event: any) {
        this.store.dispatch(LogAction({ event }));
    }
}

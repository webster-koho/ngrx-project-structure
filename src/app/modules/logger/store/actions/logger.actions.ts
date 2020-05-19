import { createAction, props } from '@ngrx/store';

export const LogAction = createAction('[Logger] Log', props<{ event: any }>());

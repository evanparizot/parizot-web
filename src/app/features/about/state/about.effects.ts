import { Injectable } from "@angular/core";
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { State } from '../about.state';

@Injectable()
export class AboutEffects {
    constructor(
        private actions$: Actions,
        private store: Store<State>
    ){}
}
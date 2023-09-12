import {Injectable} from '@angular/core';
/* NgRx */
import {Store} from '@ngrx/store';
import {Actions} from '@ngrx/effects';
import {SharedService} from './shared.service';
import * as fromRoot from '../../../state/app.state';


@Injectable()
export class SharedEffects {

  constructor(private store: Store<fromRoot.State>,
              private sharedService: SharedService,
              private actions: Actions,
  ) {
  }

}
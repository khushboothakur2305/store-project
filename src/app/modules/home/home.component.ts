import { Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { counter, } from '../shared/core/shared.selector';
import { Observable } from 'rxjs';
import * as SharedAction from "../shared/core/shared.actions"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  counter$: Observable<number> = new Observable()
  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.counter$ = this.store.select(counter)
  }

  addCounter() {
    this.store.dispatch(SharedAction.AddCounter())
  }

  removeCounter(){
    this.store.dispatch(SharedAction.RemoveCounter())
  }
}

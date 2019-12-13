import { selectPathfinderSettings } from './../../state/pathfinder.selectors';
import { Observable } from 'rxjs';
import { Algorithms } from './../../data/algo-data';
import { Algorithm, PathfinderSettings } from './../../models/algorithm';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../../pathfinder.state';
import {
  actionPathfinderSetHeuristic,
  actionPathfinderSetOptionAllowDiagonal,
  actionPathfinderSetOptionBiDirectional,
  actionPathfinderSetOptionDontCrossCorners,
  actionPathfinderSetAlgorithm
} from './../../state/pathfinder.actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'pathfinder-toolbar',
  templateUrl: './pathfinder-toolbar.component.html',
  styleUrls: ['./pathfinder-toolbar.component.scss']
})
export class PathfinderToolbarComponent implements OnInit {

  algorithms: Algorithm[] = Algorithms;

  settings$: Observable<PathfinderSettings>;

  disableAllowDiagonal: boolean;
  disableBiDirectional: boolean;
  disableDontCrossCorners: boolean;
  disableWeight: boolean;

  constructor(private store: Store<State>) {
  }

  ngOnInit() {
    this.settings$ = this.store.pipe(select(selectPathfinderSettings));
    this.checkToDisableOptions();
  }

  checkToDisableOptions() {
    this.settings$.pipe(
      map(x => x.algorithm)
    )
      .subscribe(x => {
        if (x === "" || this.algorithms.find(y => y.name === x) === undefined) {
          this.disableAllowDiagonal = true;
          this.disableBiDirectional = true;
          this.disableDontCrossCorners = true;
          this.disableWeight = true;
        }
        else {
          let options = this.algorithms.find(y => y.name === x).options;
          this.disableAllowDiagonal = options.allowDiagonal.disable ? true : false;
          this.disableBiDirectional = options.biDirectional.disable ? true : false;
          this.disableDontCrossCorners = options.dontCrossCorners.disable ? true : false;
          this.disableWeight = options.weight ? true : false;
        }
      });
  }

  onSelectedAlgorithm({ value: algorithm }) {
    this.store.dispatch(actionPathfinderSetAlgorithm({ algorithm }));
  }

  onSelectedHeuristic({ value: heuristic }) {
    this.store.dispatch(actionPathfinderSetHeuristic({ heuristic }));
  }

  onSelectedAllowDiagonal({ checked: allowDiagonal }) {
    this.store.dispatch(actionPathfinderSetOptionAllowDiagonal({ allowDiagonal }));
  }

  onSelectedBiDirectional({ checked: biDirectional }) {
    this.store.dispatch(actionPathfinderSetOptionBiDirectional({ biDirectional }));
  }

  onSelectedDontCrossCorners({ checked: dontCrossCorners }) {
    this.store.dispatch(actionPathfinderSetOptionDontCrossCorners({ dontCrossCorners }));
  }

  // onSelectedWeight(){
  //   this.store.dispatch(actionPathfinderSetOptionWeight({ weight: this.weight }));
  // }

  /*
  Algorithms

  A*
  IDA*
  Greedy best first
  Breadth-first
  Depth-first
  Dijkstra's
  Jump Point Search
  Orthogonal Jump Point Search
  Trace
  */

  /*
  Heuristics

  Manhattan
  Euclidean
  Octile
  Chebyshev
  */

  /*
  Options

  Allow Diagonal
  Don't cross corners
  Weight
  Visualize Recursion?
  */

}

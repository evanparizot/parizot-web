import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'pathfinder-toolbar',
  templateUrl: './pathfinder-toolbar.component.html',
  styleUrls: ['./pathfinder-toolbar.component.scss']
})
export class PathfinderToolbarComponent implements OnInit {

  pathfinderForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.pathfinderForm = this.fb.group({
      algorithm: [''],
      heuristic: [''],
      options: ['']
    })
  }


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

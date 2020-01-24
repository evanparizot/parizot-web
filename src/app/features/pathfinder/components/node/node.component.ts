import { Component, OnInit, Input } from '@angular/core';
import { PathNode } from '../../models/node';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {

  @Input() node: PathNode;
  constructor() { }

  ngOnInit() {
    
  }

  wasClicked() {
    console.log('was clicked');
  }
}

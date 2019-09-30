import { UserRepository } from '../../../models/github/userRepository';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-github-repo-tile',
  templateUrl: './github-repo-tile.component.html',
  styleUrls: ['./github-repo-tile.component.scss']
})
export class GithubRepoTileComponent implements OnInit {
  @Input() repo: UserRepository;
  
  constructor() { }

  ngOnInit() {
  }

}

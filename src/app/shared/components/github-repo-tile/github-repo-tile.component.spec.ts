import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubRepoTileComponent } from './github-repo-tile.component';

describe('GithubRepoTileComponent', () => {
  let component: GithubRepoTileComponent;
  let fixture: ComponentFixture<GithubRepoTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubRepoTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubRepoTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

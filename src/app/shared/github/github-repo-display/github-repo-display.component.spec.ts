import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubRepoDisplayComponent } from './github-repo-display.component';

describe('GithubRepoDisplayComponent', () => {
  let component: GithubRepoDisplayComponent;
  let fixture: ComponentFixture<GithubRepoDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubRepoDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubRepoDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubRepoContainerComponent } from './github-repo-container.component';

describe('GithubRepoContainerComponent', () => {
  let component: GithubRepoContainerComponent;
  let fixture: ComponentFixture<GithubRepoContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubRepoContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubRepoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

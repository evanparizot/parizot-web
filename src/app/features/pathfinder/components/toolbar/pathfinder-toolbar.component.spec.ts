import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathfinderToolbarComponent } from './pathfinder-toolbar.component';

describe('PathfinderToolbarComponent', () => {
  let component: PathfinderToolbarComponent;
  let fixture: ComponentFixture<PathfinderToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathfinderToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathfinderToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});

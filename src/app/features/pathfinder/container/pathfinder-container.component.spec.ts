import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathfinderContainerComponent } from './pathfinder-container.component';

describe('PathfinderContainerComponent', () => {
  let component: PathfinderContainerComponent;
  let fixture: ComponentFixture<PathfinderContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathfinderContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathfinderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutNoFooterComponent } from './layout-no-footer.component';

describe('LayoutNoFooterComponent', () => {
  let component: LayoutNoFooterComponent;
  let fixture: ComponentFixture<LayoutNoFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutNoFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutNoFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

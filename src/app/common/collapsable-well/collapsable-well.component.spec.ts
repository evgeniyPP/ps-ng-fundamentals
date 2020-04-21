import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsableWellComponent } from './collapsable-well.component';

describe('CollapsableWellComponent', () => {
  let component: CollapsableWellComponent;
  let fixture: ComponentFixture<CollapsableWellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapsableWellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsableWellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

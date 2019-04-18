import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimPage } from './sim.page';

describe('SimPage', () => {
  let component: SimPage;
  let fixture: ComponentFixture<SimPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

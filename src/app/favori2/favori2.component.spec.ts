import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Favori2Component } from './favori2.component';

describe('Favori2Component', () => {
  let component: Favori2Component;
  let fixture: ComponentFixture<Favori2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Favori2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Favori2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

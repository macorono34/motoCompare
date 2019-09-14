import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriComponent } from './favori.component';

describe('FavoriComponent', () => {
  let component: FavoriComponent;
  let fixture: ComponentFixture<FavoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

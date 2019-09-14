import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriAddComponent } from './favori-add.component';

describe('FavoriAddComponent', () => {
  let component: FavoriAddComponent;
  let fixture: ComponentFixture<FavoriAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

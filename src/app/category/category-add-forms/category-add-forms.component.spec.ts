import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryAddFormsComponent } from './category-add-forms.component';

describe('CategoryAddFormsComponent', () => {
  let component: CategoryAddFormsComponent;
  let fixture: ComponentFixture<CategoryAddFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryAddFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryAddFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

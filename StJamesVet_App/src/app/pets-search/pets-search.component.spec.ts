import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsSearchComponent } from './pets-search.component';

describe('PetsSearchComponent', () => {
  let component: PetsSearchComponent;
  let fixture: ComponentFixture<PetsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

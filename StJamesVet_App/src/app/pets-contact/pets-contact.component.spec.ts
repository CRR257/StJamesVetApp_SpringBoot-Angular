import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsContactComponent } from './pets-contact.component';

describe('PetsContactComponent', () => {
  let component: PetsContactComponent;
  let fixture: ComponentFixture<PetsContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetsContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

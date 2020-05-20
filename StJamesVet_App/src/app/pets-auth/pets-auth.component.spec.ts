import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsAuthComponent } from './pets-auth.component';

describe('PetsAuthComponent', () => {
  let component: PetsAuthComponent;
  let fixture: ComponentFixture<PetsAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetsAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

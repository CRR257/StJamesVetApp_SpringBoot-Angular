import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsWelcomeComponent } from './pets-welcome.component';

describe('PetsWelcomeComponent', () => {
  let component: PetsWelcomeComponent;
  let fixture: ComponentFixture<PetsWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetsWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

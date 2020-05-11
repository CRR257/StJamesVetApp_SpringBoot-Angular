import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsModifyComponent } from './pets-modify.component';

describe('PetsModifyComponent', () => {
  let component: PetsModifyComponent;
  let fixture: ComponentFixture<PetsModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetsModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

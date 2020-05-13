import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pets } from '../interface/petsInterface';

@Component({
  selector: 'app-pets-modify',
  templateUrl: './pets-modify.component.html',
  styleUrls: ['./pets-modify.component.scss']
})
export class PetsModifyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }


  @Input()
  pets: Pets[];

  @Input()
  petToModify: Pets[];

  @Output()
  updatePet: EventEmitter<Pets> = new EventEmitter;

  handleSubmit(form: any, valid: boolean) {
    console.log(form.value);
    console.log(this.pets)
    if (valid) {
     this.updatePet.emit(form.value)
      form.resetForm();
    }
  }
}

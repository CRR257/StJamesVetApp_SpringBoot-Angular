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

  showFeedBack: boolean;

  @Input()
  petToModify: any;

  @Input()
  petModified: any;

  @Output()
  updatePet: EventEmitter<Pets> = new EventEmitter;

  @Output()
  showUptadetePet: EventEmitter<boolean> = new EventEmitter;

  handleSubmit(form: any, valid: boolean) {
    console.log(form.value);
    if (valid) {
     this.updatePet.emit(form.value);
     this.showFeedBack = true;
      form.resetForm();
    }
  }

  hideUpdatePet(value: boolean) {
    this.showUptadetePet.emit(value);
  }

  closeFeedBack() {
    this.showFeedBack = false;
    this.hideUpdatePet(false);
  }
}

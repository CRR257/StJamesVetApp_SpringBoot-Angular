import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pets } from '../interface/petsInterface';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.scss']
})

export class PetsListComponent implements OnInit {

  showDeleteConfirmation: boolean = false;
  showDeleteFeedBack: boolean = false;
  idPetSeletedToDelete: number;

  constructor() { }

  ngOnInit(): void { }

  @Input()
  pets: Pets[];

  @Input()
  petDeleted: number;

  @Output()
  deletePetsById: EventEmitter<number> = new EventEmitter();

  @Output()
  modifyPetsById: EventEmitter<number> = new EventEmitter();

  deletePetSelected(petsId: number) {
    this.showDeleteConfirmation = true;
    this.idPetSeletedToDelete = petsId;
  }

  modifyPetSelected(petsId: number) {
    this.modifyPetsById.emit(petsId);
  }

  deleteConfirm(value: boolean) {
    if (value === true) {
      this.deletePetsById.emit(this.idPetSeletedToDelete);
      this.showDeleteFeedBack = true;
    }
    this.showDeleteConfirmation = false;
  }

  closeDeleteFeedBack() {
    this.showDeleteFeedBack = false;
  }
  
}

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
  namePetSelectedToDelete: string;

  constructor() { }

  ngOnInit(): void { }

  @Input()
  pets: Pets[];

  @Input()
  page: number;

  @Input()
  pages: [];

  @Input()
  petDeleted: number;

  @Output()
  pageSelected: EventEmitter<number> = new EventEmitter();

  @Output()
  deletePetsById: EventEmitter<number> = new EventEmitter();

  @Output()
  modifyPetsById: EventEmitter<number> = new EventEmitter();

  setPage(i, event: any) {
    event.preventDefault();
    this.pageSelected.emit(i);
  }
  
  deletePetSelected(petsId: number, petsName: string) {
    this.showDeleteConfirmation = true;
    this.namePetSelectedToDelete = petsName;
    this.idPetSeletedToDelete = petsId;
  }

  modifyPetSelected(petsId: number) {
    console.log(petsId)
    this.modifyPetsById.emit(petsId);
  }

  deleteConfirm(value: boolean) {
    if (value === true) {
      this.deletePetsById.emit(this.idPetSeletedToDelete);
      this.showDeleteFeedBack = true;
    }
    this.showDeleteConfirmation = false;
  }

  closeFeedBack() {
    this.showDeleteFeedBack = false;
  }
  
}

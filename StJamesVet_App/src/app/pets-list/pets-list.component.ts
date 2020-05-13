import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pets } from '../interface/petsInterface';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.scss']
})
export class PetsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  @Input()
  pets: Pets[];

  @Output()
  deletePetsById: EventEmitter<number> = new EventEmitter();

  @Output()
  modifyPetsById: EventEmitter<number> = new EventEmitter();

  deletePets(petsId: number) {
    this.deletePetsById.emit(petsId);
  }

  modifyPets(petsId: number) {
    this.modifyPetsById.emit(petsId);
  }
}

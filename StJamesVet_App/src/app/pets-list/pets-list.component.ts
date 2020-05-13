import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pets } from '../interface/petsInterface';
import {Router} from '@angular/router';
import {PetsComponent } from '../pets/pets.component';
@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.scss']
})
export class PetsListComponent implements OnInit {

  showDeleteConfirmation: boolean = false;
  //deleteConfirmation: boolean = false;
  idPetSeletedToDelete: number;

  constructor( private router: Router ) { }

  ngOnInit(): void { }

  @Input()
  pets: Pets[];

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
      //this.ngOnInit();
    //   this.router.navigateByUrl('/home', { skipLocationChange: true }).then(() => {
    //     this.router.navigate(['PetsComponent']);
    // }); 
      //this.router.navigate([PetsComponent ]);
    }
    this.showDeleteConfirmation = false;
  }
}

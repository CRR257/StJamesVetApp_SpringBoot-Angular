import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PetsService } from '../service/pets.service';
import { Pets } from '../interface/petsInterface';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {

  pets = [];
  petsSearchResult = [];
  petToModify = [];
  petDeleted = [];
  numValue: number;
  strString: String;
  showModifyPets: boolean = false;
  petsIdModifying: number

  constructor(private petsService: PetsService) { }

  ngOnInit(): void {
    this.getAllPets();
  }

  getAllPets() {
    this.petsService.getPets().subscribe((data: []) => {
      this.pets = data;
      console.log(this.pets)
    })
  }

  searchPetByNumber(numValue: number) {
    this.petsService.searchPetsByNumber(numValue).subscribe((data: any) =>
      this.petsSearchResult = [data]);
    console.log(this.petsSearchResult);
  }

  searchPetByString(strValue: string) {
    this.petsService.searchPetsByString(strValue).subscribe((data: any) =>
      this.petsSearchResult = [data]);
    console.log(this.petsSearchResult);
  }

  deletePetsById(petsId: number) {
    this.petsService.deletePets(petsId).subscribe(() => {
      this.getAllPets();
    })
  }

  modifyPetsById(petsId: number) {
    this.showModifyPets = true;
    this.petsIdModifying = petsId;
    this.pets.forEach((pet, index) => {
      if (pet.petsId === petsId) {
        this.petToModify.push(pet);
      }
    })
  }

  updatePet(pet: Pets) {
    let petsId = this.petsIdModifying;
    this.petsService.modifyPet(pet, petsId).subscribe();
  }

  showUptadetePet(value: boolean) {
    this.showModifyPets = false;
    this.petToModify = [];
    console.log(this.petToModify)
  }
}

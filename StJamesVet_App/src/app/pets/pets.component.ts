import { Component, OnInit } from '@angular/core';
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
    console.log(numValue)
    this.petsService.searchPetsByNumber(numValue).subscribe((data: any) =>
      this.petsSearchResult = [data]);
    console.log(this.petsSearchResult);
  }

  searchPetByString(strValue: string) {
    console.log(strValue)
    this.petsService.searchPetsByString(strValue).subscribe((data: any) =>
      this.petsSearchResult = [data]);
    console.log(this.petsSearchResult);
  }

  deletePetsById(petsId: number) {
    console.log(petsId);
    this.petsService.deletePets(petsId).subscribe();
    this.ngOnInit();   
  }

  modifyPetsById(petsId: number) {
    this.showModifyPets = true;
    this.petsIdModifying = petsId;
  }

  updatePet(pets: Pets) {
    let petsId = this.petsIdModifying
    console.log(pets)
    console.log(petsId)
    this.petsService.modifyPet(pets, petsId).subscribe();
  }
}

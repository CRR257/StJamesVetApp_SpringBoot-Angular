import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PetsService } from '../service/petsService/pets.service';
import { Pets } from '../interface/petsInterface';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {

  pets: Array<any>;
  totalPets: number;
  petsSearchResult: Array<any>;
  petToModify: Array<any>;
  petModified: Array<any>;
  petDeleted: number;
  error: String;
  showError: boolean = false;
  numValue: number;
  strString: String;
  showModifyPets: boolean = false;
  petsIdModifying: number
  page: number = 0;
  pages: Array<number>;

  constructor(private petsService: PetsService) { }

  ngOnInit(): void {
    this.getAllPets();
  }

  pageSelected(i: number) {
    this.page = i;
    this.getAllPets();
  }

  getAllPets() {
    console.log(this.page)
    this.petsService.getPets(this.page).subscribe(
      (data) => {
        console.log(data)
        this.pets = data['content'];
        this.pages = new Array(data['totalPages']);
        this.totalPets = data.totalElements;
        this.error = '';
      },
      (error) => {
        this.error = error.error.message;
      })
  }

  searchPetByNumber(numValue: number) {
    this.petsService.searchPetsByNumber(numValue).subscribe((data: any) => {
      this.petsSearchResult = [data];
      this.error = '';
      this.showError = false;
    },
      (error) => {
        this.error = error.error.message;
        this.petsSearchResult = [];
      })
  }

  searchPetByString(strValue: string) {
    this.petsService.searchPetsByString(strValue).subscribe(
      (data: any) => {
        this.petsSearchResult = [data];
        this.error = '';
        this.showError = false;
      },
      (error) => {
        this.error = error.error.message;
        this.petsSearchResult = [];
      })
  }

  deletePetsById(petsId: number) {
    this.petsService.deletePets(petsId).subscribe((data: any) => {
      if (petsId === data) {
        this.petDeleted = data;
      }
      let getLastPage = (this.totalPets - 1) / 5
      if (getLastPage % 1 === 0) {
        this.page = this.page - 1
      }
      this.getAllPets();
    })
  }

  modifyPetsById(petsId: number) {
    this.petsIdModifying = petsId;
    this.pets.forEach((pet, index) => {
      if (pet.petsId === petsId) {
        this.petToModify = pet;
        this.showModifyPets = true;
      }
    })
  }

  updatePet(pet: Pets) {
    console.log(this.petModified)
    let petsId = this.petsIdModifying;
    this.petsService.modifyPet(pet, petsId).subscribe(
      (data: any) => {
        if (pet.petsId === data.petsId) {
          this.petModified = data;
        }
      }
    );
  }

  showUptadetePet(value: boolean) {
    this.showModifyPets = false;
    this.petToModify = [];
    this.getAllPets();
  }

}

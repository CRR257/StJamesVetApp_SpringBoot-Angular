import { Component, OnInit } from '@angular/core';
import {PetsService} from '../service/pets.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {

  pets = [];
  //petResultById = []
  petsSearchResult = [];
  numValue: Number;
  strString: String;
  constructor(private petsService: PetsService) { }

  ngOnInit(): void {
    this.getAllPets();
  }

  getAllPets(){
    this.petsService.getPets().subscribe((data: []) => {
      this.pets = data;
      console.log(this.pets)
    }) 
  }

  searchPetByNumber(numValue: number){
    console.log(numValue)
    this.petsService.searchPetsByNumber(numValue).subscribe((data: any) => 
  this.petsSearchResult = [data]);
   console.log(this.petsSearchResult);
  }

  searchPetByString(strValue: string){
    console.log(strValue)
    this.petsService.searchPetsByString(strValue).subscribe((data: any) => 
  this.petsSearchResult = [data]);
   console.log(this.petsSearchResult);
  }

  // searchPetById(value: any) {
  //   console.log(value)
  //   //var ab = 123
  //   var reg = /^\d+$/;
  //   console.log(reg.test(value))
  //   if(reg.test(value)){
  // //if (/^([a-z0-9]{5,})$/.test(value)){
  //   console.log("number")
  //   this.strValue = value
  //   this.petsService.searchPetsByNumber(this.strValue).subscribe((data: any) => 
  //   this.petsSearchResult = [data]);
  //   console.log(this.petsSearchResult);
  //   }else {
  //     console.log("letter")
  //     this.petsService.searchPetsByString(value).subscribe((data: any) => 
  //   this.petsSearchResult = [data]);
  //   console.log(this.petsSearchResult);
  //   }
  //   //  this.petsService.searchPetsId(value).subscribe((data: any) => 
  //   //  this.petResultById = [data]);
  //   // console.log(this.petResultById);
  // }

}

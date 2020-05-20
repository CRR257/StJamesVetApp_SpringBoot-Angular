import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Pets } from '../../interface/petsInterface';

// export class Employee {
//   constructor(
//     public empId: string,
//     public name: string,
//     public designation: string,
//     public salary: string,
//   ) { }
// }

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor(private service: HttpClient) { }

  PETS_API: string = "http://localhost:8080/v1"


  getPets(page: number): Observable<any> {
    console.log(page)
    return this.service.get(`${this.PETS_API}/pets?page=${page}`)
  }

  searchPetsId(id: number): Observable<any> {
    return this.service.get(`${this.PETS_API}/pets/${id}`)
  }

  searchPetsByString(strValue: string): Observable<any> {
    return this.service.get(`${this.PETS_API}/pets/value=${strValue}`)
  }

  searchPetsByNumber(numValue: number): Observable<any> {
    return this.service.get(`${this.PETS_API}/pets/num=${numValue}`)
  }

  deletePets(petsId: number): Observable<any> {
    return this.service.delete(`${this.PETS_API}/pets/${petsId}`)
  }

  createPet(pet: Pets): Observable<any> {
    return this.service.post(`${this.PETS_API}/pets`, pet)
  }

  modifyPet(pet: Pets, petsId: number): Observable<any> {
    return this.service.put(`${this.PETS_API}/pets/${petsId}`, pet)
  }
}

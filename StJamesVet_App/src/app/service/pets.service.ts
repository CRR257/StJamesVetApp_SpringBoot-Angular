import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor(private service: HttpClient) { }

  getPets(): Observable<any> {
    return this.service.get(`http://localhost:8080/pets/`)   
  }

  searchPetsId(id: number): Observable<any> {
    return this.service.get(`http://localhost:8080/pets/${id}`)   
  } 

  searchPetsByString(strValue: string): Observable<any> {
    console.log(strValue)
    return this.service.get(`http://localhost:8080/pets/value=${strValue}`)   
  } 

  searchPetsByNumber(numValue: number): Observable<any> {
    console.log(numValue)
    console.log(typeof(numValue))
    return this.service.get(`http://localhost:8080/pets/num=${numValue}`)   
  } 
}

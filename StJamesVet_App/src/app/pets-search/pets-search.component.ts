import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Pets } from '../interface/petsInterface';


@Component({
  selector: 'app-pets-search',
  templateUrl: './pets-search.component.html',
  styleUrls: ['./pets-search.component.scss']
})
export class PetsSearchComponent implements OnInit {

  showPetResult: boolean = false;
  numValue: number;
  strValue: string;

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  petsSearchResult: Pets[];
  
  @Output()
  searchPetByString: EventEmitter<string> = new EventEmitter();

  @Output()
  searchPetByNumber: EventEmitter<number> = new EventEmitter();

  searchPetByValue(value: any) {
    console.log(value)
    console.log(typeof(value))
    var reg = /^\d+$/;
    console.log(reg.test(value))
    if(reg.test(value)){
      var valueToNumber = parseInt(value, 10);
      this.numValue = valueToNumber;
      this.searchPetByNum(this.numValue); 
    }else{
      this.strValue = value;
      this.searchPetByStr(this.strValue); 
    }
  }

  searchPetByNum(numValue: number){
    console.log(numValue)
    this.searchPetByNumber.emit(numValue);
    this.showPetResult = true;
  }

  searchPetByStr(strValue: string){
    console.log(strValue);
    this.searchPetByString.emit(strValue);
    this.showPetResult = true;
  }

}


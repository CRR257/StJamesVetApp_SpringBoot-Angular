import { Component, OnInit } from '@angular/core';
import { PetsService } from '../service/pets.service';

@Component({
  selector: 'app-pets-create',
  templateUrl: './pets-create.component.html',
  styleUrls: ['./pets-create.component.scss']
})
export class PetsCreateComponent implements OnInit {

  constructor( private petsService: PetsService ) { }

  ngOnInit(): void { }

  handleSubmit(form: any, valid: boolean) {
    console.log(form.value);
    if (valid) {
      this.petsService.createPet(form.value).subscribe();
      form.resetForm();
    }
  }
}

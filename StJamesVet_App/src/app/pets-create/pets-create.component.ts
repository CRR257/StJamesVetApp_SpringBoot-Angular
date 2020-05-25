import { Component, OnInit } from '@angular/core';
import { PetsService } from '../service/petsService/pets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pets-create',
  templateUrl: './pets-create.component.html',
  styleUrls: ['./pets-create.component.scss']
})
export class PetsCreateComponent implements OnInit {

  constructor(private petsService: PetsService,
    private router: Router) { }

  ngOnInit(): void { }

  petCreated: any[];
  showFeedBack: boolean;
  species: any[] = [
    { name: 'Cat' },
    { name: 'Dog' },
    { name: 'Rabbit' },
    { name: 'Turtle' },
    { name: 'Tortoise' },
  ];


  handleSubmit(form: any, valid: boolean) {
    console.log(form.value);
    if (valid) {
      this.petsService.createPet(form.value).subscribe((data) => {
        this.petCreated = [data];
      });
      this.showFeedBack = true;
      form.resetForm();
    }
  }

  closeFeedBack() {
    this.showFeedBack = false;
    this.router.navigateByUrl('/home');
  }
}

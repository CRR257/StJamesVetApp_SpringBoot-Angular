// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthenticationService } from '../service/authService/authentication.service';
// @Component({
//   selector: 'app-pets-auth',
//   templateUrl: './pets-auth.component.html',
//   styleUrls: ['./pets-auth.component.scss']
// })
// export class PetsAuthComponent implements OnInit {

//   username = ''
//   password = ''
//   invalidLogin = false

//   constructor(private router: Router,
//     private loginservice: AuthenticationService) { }

//   ngOnInit() {
//   }

//   checkLogin() {
//     if (this.loginservice.authenticate(this.username, this.password)
//     ) {
//       this.router.navigate([''])
//       this.invalidLogin = false
//     } else
//       this.invalidLogin = true
//   }
//   // constructor() { }

//   // ngOnInit(): void {
//   // }

//   // handleSubmit(form: any, valid: boolean) {
//   //   console.log(form.value);
//   //   if (valid) {
//   //     console.log(form.value)
//   //     //this.petsService.createPet(form.value).subscribe();
//   //     //form.resetForm();
//   //   }
//   // }
// }

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authService/authentication.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
    selector: 'app-pets-auth',
    templateUrl: './pets-auth.component.html',
    styleUrls: ['./pets-auth.component.scss']
  })
export class PetsAuthComponent implements OnInit {

  username: String;
  password: String;
  error: String;

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  handleSubmit(form: any, valid: boolean) {
    console.log(form.value);
    if(valid){
      this.error = '';
    (this.loginservice.authenticate(form.value.user, form.value.password).subscribe(
      data => {
        this.router.navigate(['home'])
      },
      error => {
        this.error = "User or Password are incorrect"
        console.log(this.error)

      }
    )
    );
    }

  }

}
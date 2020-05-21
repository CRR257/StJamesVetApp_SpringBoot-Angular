import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authService/authentication.service';

@Component({
  selector: 'app-pets-auth',
  templateUrl: './pets-auth.component.html',
  styleUrls: ['./pets-auth.component.scss']
})
export class PetsAuthComponent implements OnInit {

  username: String;
  password: String;
  error: String;
  formValid: boolean = false;

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  handleSubmit(form: any, valid: boolean) {
    console.log(form.value);
    if (valid) {
      this.formValid = true;
      this.error = '';
      (this.loginservice.authenticate(form.value.user, form.value.password).subscribe(
        data => {
          this.router.navigate(['home'])
        },
        error => {
          this.error = "User or Password are incorrect"
        })
      );
    }
  }
}
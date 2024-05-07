import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {

  SignupForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
  });

  constructor(private location: Location, private authService: AuthService) {

  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    console.log(this.SignupForm.value);
    const emailValue = this.SignupForm.get('email')?.value;
    const passwordValue = this.SignupForm.get('password')?.value;
  
    if (emailValue !== null && emailValue !== undefined && passwordValue !== null && passwordValue !== undefined) {
      this.authService.signup(emailValue, passwordValue).then(cred => {
        console.log(cred);
      }).catch(error => {
        console.error(error);
      });
    }
  }

  goBack() {
    this.location.back();
  }
}

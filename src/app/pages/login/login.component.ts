import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = new FormControl('');
  password = new FormControl('');

  constructor(private router: Router, private authService: AuthService, private _snackBar: MatSnackBar) { }

  login() {
    /*if (this.email.value === 'test@gmail.com' && this.password.value === 'testpw') {
      this.router.navigateByUrl('/main');
    } else {
      console.error('Helytelen email, vagy jelszó!');
    }*/
    if(this.email.value !== null && this.password.value !== null) {
    this.authService.login(this.email.value, this.password.value).then(cred => {
      //console.log(cred);
      this.router.navigateByUrl('/main');
      this.openSnackBar('Üdvözlünk!', 'Bezárás')
    }).catch(error => {
      console.error(error);
    })
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}

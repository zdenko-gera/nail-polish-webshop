import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  email = new FormControl('');
  password = new FormControl('');

  constructor(private router: Router) { }

  ngOnInit(): void {}

  login() {
    if (this.email.value === 'test@gmail.com' && this.password.value === 'testpw') {
      this.router.navigateByUrl('/main');
    } else {
      console.error('Helytelen email, vagy jelszó!');
    }
  }
}

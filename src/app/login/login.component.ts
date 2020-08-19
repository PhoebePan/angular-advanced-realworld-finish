import { LoginService } from './../login.service';
import { UserLoginInfo } from './../interfaces/login-info';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserLoginInfo = {
    email: '',
    password: ''
  };

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

}

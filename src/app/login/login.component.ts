import { LoginService } from './../login.service';
import { UserLoginInfo } from './../interfaces/login-info';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: UserLoginInfo = {
    email: '',
    password: '',
  };

  redirectUrl = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((queryParamMap) => {
      this.redirectUrl = queryParamMap.get('redirect');
    });
  }

  login(): void {
    this.loginService
      .login(this.user)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          return throwError(error);
        })
      )
      .subscribe((result) => {
        localStorage.setItem('token', result.user.token);
        this.router.navigateByUrl(this.redirectUrl ?? '/');
      });
  }
}

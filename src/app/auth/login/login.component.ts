import { Component } from '@angular/core';
import { AuthService } from '../../_services/auth.service';

import { Router } from '@angular/router'

@Component({
  selector: '<login-component></login-component>',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})

export class LoginComponent{
  constructor(
    private authService: AuthService,
    private router: Router
  ){

  }

  login(){
    console.log("Logging In");
    this.authService.login()
    .subscribe(()=>{
      console.log("Got response from auth service");
      if(this.authService.isLoggedIn){
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/member/home';
        this.router.navigate([redirect]);
      }
    });
  }
}

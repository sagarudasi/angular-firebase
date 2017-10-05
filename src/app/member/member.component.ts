import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';

import { Router } from '@angular/router';

@Component({
  selector: '<member-component></member-component>',
  templateUrl: 'member.component.html'
})

export class MemberComponent{
  constructor(
    private authService: AuthService,
    private router: Router
  ){

  }

  logout(){
    this.authService.logout()
    .subscribe(()=>{
      if(this.authService.isLoggedIn == false){
        this.router.navigate(['/auth/login']);
      }
    })

  }
}

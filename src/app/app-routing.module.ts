import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RecoverAccountComponent } from './auth/login/recover-account.component';
import { RegisterComponent } from './auth/register/register.component';
import { OTPVerifyComponent } from './auth/register/otp-verify.component';
import { MemberComponent } from './member/member.component';
import { HomeComponent } from './member/home/home.component';
import { PageNotFoundComponent } from './404/page-not-found.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'recover',
        component: RecoverAccountComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'otp',
        component: OTPVerifyComponent
      }
    ]
  },
  {
    path: 'member',
    component: MemberComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule{

}

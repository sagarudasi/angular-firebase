import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RecoverAccountComponent } from './auth/login/recover-account.component';
import { RegisterComponent } from './auth/register/register.component';
import { OTPVerifyComponent } from './auth/register/otp-verify.component';
import { MemberComponent } from './member/member.component';
import { HomeComponent } from './member/home/home.component';
import { PageNotFoundComponent } from './404/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    RecoverAccountComponent,
    RegisterComponent,
    MemberComponent,
    OTPVerifyComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

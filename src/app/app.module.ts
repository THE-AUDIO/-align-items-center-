import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GoogleLoginProvider, GoogleSigninButtonDirective, GoogleSigninButtonModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { Google_Client_Id } from 'src/environments/environment';
import { Login1Component } from './login1/login1.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Login1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleSigninButtonModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(Google_Client_Id)
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

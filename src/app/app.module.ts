import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashscreenComponent } from './components/splashscreen/splashscreen.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SettingsComponent } from './components/settings/settings.component';
import { RegisterCardComponent } from './components/register-card/register-card.component';
import { RegisterTrackerComponent } from './components/register-tracker/register-tracker.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashscreenComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    SettingsComponent,
    RegisterCardComponent,
    RegisterTrackerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { ProfileComponent } from './components/profile/profile.component';
import { PostComponent } from './components/post/post.component';
import { InputPostComponent } from './components/input-post/input-post.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { MainComponent } from './components/main/main.component';
import { Routes,RouterModule } from '@angular/router';


const routes:Routes =[
  {
    component:LoginComponent,
    path:''
  },
   {
    component:RegisterComponent,
    path:'register'
  },
   {
    component:MainComponent,
    path:'home'
  },
  {
    component:ProfileComponent,
    path:'profile'
  }
];

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
    RegisterTrackerComponent,
    ProfileComponent,
    PostComponent,
    InputPostComponent,
    NewPostComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

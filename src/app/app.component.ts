import { Component, OnInit } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MainComponent } from './components/main/main.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    
  }
  title :String= 'MindLeak';
  splash:Boolean;
  constructor(){
    this.splash = true;
  }
  timer:any = setTimeout(() => {
    this.splash = false;
}, 2000);
}

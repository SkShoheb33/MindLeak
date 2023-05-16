import { Component, OnInit } from '@angular/core';

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

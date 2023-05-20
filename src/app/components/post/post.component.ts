import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  name = 'Shoheb'
  show_circle=false;
  date = new Date();
  showCircle(event :any){
    this.show_circle = !this.show_circle;
  }
  like(){}
  comment(){}
  share(){}
}

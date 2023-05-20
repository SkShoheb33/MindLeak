import { Component } from '@angular/core';

@Component({
  selector: 'app-input-post',
  templateUrl: './input-post.component.html',
  styleUrls: ['./input-post.component.css']
})
export class InputPostComponent {
  constructor(){
    // this.e = null;
  }
  image = "../../../assets/Image/card.png";
  onSelect(e:any){
    console.log(e.target);
  }
}

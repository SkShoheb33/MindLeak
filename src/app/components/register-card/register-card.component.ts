import { Component,OnInit,Input} from '@angular/core';
@Component({
  selector: 'app-register-card',
  templateUrl: './register-card.component.html',
  styleUrls: ['./register-card.component.css']
})
export class RegisterCardComponent implements OnInit{
  @Input ('questions') questions:any;
  currentNode :any|undefined;
  pDisabled:Boolean = true;
  nDisabled:Boolean = false;
  alert = true;
  success:Boolean = false;
  i = 0;
  bName:String;
  constructor(){
    this.bName = ''
     this.nDisabled= false;
  }
  ngOnInit(): void {
    this.currentNode = this.questions[this.i];
     this.nDisabled= false;

  }
  prev(answer:String){
    console.log(answer);
    this.nDisabled = false;
    this.pDisabled = false;
    this.questions[this.i].answer = answer;
    this.i-=1;
    this.currentNode = this.questions[this.i];
    if(this.i<=0){ 
      this.pDisabled = true;
    }
  }
  next(answer:String){
    if(answer.length==0){
      this.alert = false;
      setTimeout(()=>this.alert=true,500);

    }else{
      console.log(answer);
      this.nDisabled = false;
      this.pDisabled = false;
      this.i +=1;
      this.currentNode = this.questions[this.i];
      if(this.i == 7){
        this.nDisabled = true;
      }
    }
  }
  submit(){
    console.log(this.questions);
    this.success = true;
    setTimeout(()=>this.success=false,500);
  }
}

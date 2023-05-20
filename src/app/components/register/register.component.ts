import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  // question:String[];
  l:Number[];
  questions:any = [
    {
      question: "Enter your name",
      isAnswered : false,
      type: "text",
      answer: ""
    },
    {
      question: "Enter your user name",
      isAnswered : false,
      type: "text",
      answer: ""
    },
    {
      question: "Enter your ph number",
      isAnswered : false,
      type: "number",
      answer: ""
    },
    {
      question: "Enter your email",
      isAnswered : false,
      type: "email",
      answer: ""
    },
    {
      question: "Enter your current occupation",
      isAnswered : false,
      type: "text",
      answer: ""
    },
    {
      question: "Enter your comp/cllg name",
      isAnswered : false,
      type: "text",
      answer: ""
    },
    {
      question: "Enter your password",
      isAnswered : false,
      type: "password",
      answer: ""
    },
    {
      question: "Enter your confirm password",
      isAnswered : false,
      type: "password",
      answer: ""
    },
  ]
  constructor(){
    this.l = [0,1,2,3,4,5,6,7];
  //   this.question = ["Enter your name","Enter your user name","Enter your ph number",
  // "Enter your email","Enter your current occupation","Enter your comp/cllg name","Enter your password",
  // "Enter your confirm password"];
  }
  ngOnInit(): void {
      
  }
}

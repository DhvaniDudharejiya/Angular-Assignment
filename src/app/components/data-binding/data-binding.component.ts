import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

    // Properties
    username:string = "Dhvani"
    age:number = 22
    isAdult:boolean = true
  
    imgPath: string = "../../../assets/images/nature-img-1.webp"
  
    disableInput:boolean = true
  
    myName:string = ""
  
    // Methods
    constructor() { }
  
    ngOnInit(): void {
    }
  
    clickMe(){
      alert('Button clicked')
    }
  
    enableInput(){
      this.disableInput = !this.disableInput
    }
  
    // Value is send from html using the reference variable
    showMsg(val: any){
      alert(val)
    }
}

import { Component, OnInit } from '@angular/core';
import { MyFirstService } from 'src/app/shared/services/my-first.service';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  // Properties
  username: string = "Dhvani"
  age: number = 22
  isAdult: boolean = true

  imgPath: string = "../../../assets/images/nature-img-1.webp"

  disableInput: boolean = true

  myName: string = ""

  products: any //myfirst service

  // Methods
  constructor(private firstservice: MyFirstService) { } //add service

  ngOnInit(): void {
    // this.products = this.firstservice.myproducts
    this.products = this.firstservice.getproduct() //add private in service
  }

  clickMe() {
    alert('Button clicked')
  }

  enableInput() {
    this.disableInput = !this.disableInput
  }

  // Value is send from html using the reference variable
  showMsg(val: any) {
    alert(val)
  }
}

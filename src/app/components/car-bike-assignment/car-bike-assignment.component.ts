import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-bike-assignment',
  templateUrl: './car-bike-assignment.component.html',
  styleUrls: ['./car-bike-assignment.component.css']
})
export class CarBikeAssignmentComponent implements OnInit {

  cars : string[] = ["Honda","Audi","BMW","Hyundai","TATA"]
  bikes : string[]= ["Apache PTR 160","Avengers 220"," RE Himalayan","Hero Splendar"]
  flagcar : boolean = true
  flagbike : boolean = true
  Clicked : boolean = false

  selecteditem : string = ""

  constructor() { }

  ngOnInit(): void {
  }
  carclicked(){
    this.Clicked = false
    this.flagcar = false
    this.flagbike = true
    this.selecteditem = ""
    // alert("car clicked")
  }
  bikeclicked(){
    this.Clicked = false
    this.flagcar =true
    this.flagbike = false
    this.selecteditem = ""

    // alert("bike clicked")
  }
  showMsg(val: any){
    this.Clicked = true
    this.selecteditem = val
  }
}

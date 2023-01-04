import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {


  myVal: boolean = false

  fruits:string[] = ["Apple", "Banana", "Orange", "Mango","Strawberry", "Peach"]

  myChoice:string = "a"

  constructor() { }

  ngOnInit(): void {
  }

}

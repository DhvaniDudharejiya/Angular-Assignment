import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-att-directives',
  templateUrl: './att-directives.component.html',
  styleUrls: ['./att-directives.component.css']
})
export class AttDirectivesComponent implements OnInit {

  // Simple property to use with ngStyle
  myNgStyle = {
    color: "red"
  }

  // Property to use with ngStyle (based on condition)
  flag: boolean = false
  myNewNgStyle = {
    color: this.flag ? "red" : "greenyellow",
    backgroundColor: this.flag ? "cyan" : "black"

  }

  // Property to use with ngClass
  myNgClasses = {
    //"txtDanger": this.flag,
    "txtSuccess": !this.flag
    //"txtDanger"
  }

  constructor() { }

  ngOnInit(): void {
  }

}

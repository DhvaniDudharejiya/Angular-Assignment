import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector',
  // templateUrl: './selector.component.html',
  template:'<h1>Header</h1>',
  
  // styleUrls: ['./selector.component.css']
  styles:['h1{color : red}']
})
export class SelectorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {


  counter: number = 0
  counterMsg: string = 'counter value :'
  constructor() { }

  ngOnInit(): void {
  }

  incrementcounter() {
    this.counter++
    this.counterMsg = 'counter value : ' + this.counter
  }

  decrementcounter() {
    if (this.counter <= 0) {
      this.counter
    }
    else {
      this.counter--
      this.counterMsg = 'counter value : ' + this.counter
    }

  }
}

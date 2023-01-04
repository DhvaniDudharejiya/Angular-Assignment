import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() 
  pData: any

  @Output()
  emitterObj = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  getMessage(val:any){
    console.log(val)
    this.emitterObj.emit(val)
  }

}

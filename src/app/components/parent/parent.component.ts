import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  childData: any
  data: any
  constructor() { }

  ngOnInit(): void {
  }

  getMsg(val:any){
    //console.log(val)
    this.data = val
  }


}

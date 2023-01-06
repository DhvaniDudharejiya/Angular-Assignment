import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChangeColorDirective } from 'src/app/custom-dir/change-color.directive';
import { MyFirstService } from 'src/app/shared/services/my-first.service';

@Component({
  selector: 'app-my-color',
  templateUrl: './my-color.component.html',
  styleUrls: ['./my-color.component.css']
})
export class MyColorComponent implements OnInit {

  products: any //myfirst service

  //viewchild ref will be first child
  @ViewChild(ChangeColorDirective) child1 : ChangeColorDirective | undefined

//viewchildren will refer to all the matching children. store in a list
  @ViewChildren(ChangeColorDirective) allelements : QueryList<ChangeColorDirective> | undefined
  constructor(private firstservice : MyFirstService) { } //add service

  ngOnInit(): void {
    // this.products = this.firstservice.myproducts
    this.products = this.firstservice.getproduct() //add private in service 

  }
  setcolor(color: string){
    // this.child1?.changecolor(color)
    this.allelements?.forEach(e =>{
      e.changecolor(color)
    })
  }

}

import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective implements AfterViewInit{

  constructor(private element : ElementRef) { }


  ngAfterViewInit(): void {
    // console.log(this.element.nativeElement)
    this.element.nativeElement.style.color = "red"
  }
  //apply color dynamic 
  changecolor(newcolor:string){
    this.element.nativeElement.style.color = newcolor
  }
}

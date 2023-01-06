import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-img',
  templateUrl: './switch-img.component.html',
  styleUrls: ['./switch-img.component.css']
})
export class SwitchImgComponent implements OnInit {

  // property
  imgPath1: string = "../../../assets/images/nature-img-1.webp"
  imgname: string = "nature image 1"
  disableInput: boolean = true

  constructor() { }

  ngOnInit(): void {
  }
  switch() {
    this.disableInput = !this.disableInput
    if (this.disableInput == true) {
      this.imgPath1 = "../../../assets/images/nature-img-1.webp"
      this.imgname = "nature image 1"
    }
    else {
      this.imgPath1 = "../../../assets/images/nature-img-2.jpg"
      this.imgname = "nature image 2"
    }
  }
}

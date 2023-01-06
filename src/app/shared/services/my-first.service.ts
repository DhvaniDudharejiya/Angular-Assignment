import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {

 private myproducts = [
    { productId: "p101", productName: "mobile", productPrice: 25000 },
    { productId: "p102", productName: "laptop", productPrice: 65000 },
    { productId: "p103", productName: "ipad", productPrice: 20000 },
    { productId: "p104", productName: "printer", productPrice: 8000 }
  ]
  constructor() { }
  getproduct(){
    return this.myproducts
  }}

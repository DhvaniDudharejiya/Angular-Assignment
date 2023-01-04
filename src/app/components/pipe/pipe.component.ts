import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  students = [
    {id:101, name:"Dilip", gender:"Male",address:"Satara", contact: 98989844332},
    {id:102, name:"Mansi", gender:"Female",address:"Pune", contact: 80989844777},
    {id:103, name:"Akash", gender:"Male",address:"Mumbai", contact: 87878788855},
    {id:104, name:"Shubham", gender:"Male",address:"Nagpur", contact: 7733344332},
    {id:105, name:"Priyanka", gender:"Female",address:"Kolhapur", contact: 7798986673}

  ]
  
  Numbers= [
    { area:2 , square: 4},
    { area:3 , square: 0},
    { area:4 , square: 0},
    { area:5 , square: 0},
    { area:6 , square: 0},
    { area:7 , square: 0},
    { area:8 , square: 0},
    { area:9 , square: 0},
    { area:10 , square: 0},
    { area:11, square: 0}
  ]
  
  
 Noms= [
    { area:2 , radius: 4},
    { area:3 , radius: 0},
    { area:4 , radius: 0},
    { area:5 , radius: 0},
    { area:6 , radius: 0},
    { area:7 , radius: 0},
    { area:8 , radius: 0},
    { area:9 , radius: 0},
    { area:10 , radius: 0},
    { area:11, radius: 0}
  ]

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  setid(id:any){
    this.router.navigate(["/pipe",id])
  }
  setgender(gender:any){
    this.router.navigate(["/pipe",gender])
  }
  setaddress(address:any){
    this.router.navigate(["/pipe",address])
  }
  setcontact(contact:any){
    this.router.navigate(["/pipe",contact])
  }

}

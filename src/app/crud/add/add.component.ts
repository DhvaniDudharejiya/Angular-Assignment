import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  tableName= "Employee"
  //dependency injection
  // constructor(private dataService : DataService , private router : Router) { }
  constructor(private globalService : GlobalService , private router : Router) { }

  ngOnInit(): void {
  }

  addData(data: any) {
    console.log(data)
    //pass obj bcz some time name will be not same that time store data in obj
    const empObj = {
      name: data.name,
      post: data.post,
      salary: data.salary,
      address: data.address
    }
    this.globalService.addRecord(this.tableName,empObj).subscribe(()=>{
      alert("Record added")
      this.router.navigate(['/crud'])
    })
  }

}

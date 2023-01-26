import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,  } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: any
  empObj: any
  tableName= "Employee"
  // constructor(private activatedRoute: ActivatedRoute, private dataservice: DataService , private route: Router) { }
  constructor(private activatedRoute: ActivatedRoute, private dataservice: GlobalService , private route: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((para) => {
      this.id = para.get('id')
      // console.log(this.id,"*******************************************")
    })
    this.dataservice.getrecord("Employee",this.id).subscribe((res) => {
      this.empObj = { ...res } // this will store the data in object format
      // console.log(res,"===================================")
    })
  }
  putData(data: any) {
    const temp = {
      id: this.id,
      name: data.name,
      post: data.post,
      salary: data.salary,
      address: data.address
    }
    // console.log(temp)
    this.dataservice.updateRecord(this.tableName,temp).subscribe(() => {
      alert("Record update successfully")
      this.route.navigate(['/crud'])
    })


  }
}

import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  term: any
  pageno: any
  empData: any
  // order: string = 'name';
  order: string = '';
  reverse: boolean = true
  tableName = "Employee"


  // constructor(private dataService: DataService) { }
  //for global services
  constructor(private globalService: GlobalService) { }

  ngOnInit(): void {
    // this.globalService.getrecords().subscribe((res) => {
    //   //  console.log(res)
    //   this.empData = res
    //   console.log(this.empData, "client data")
    // })
    let s = this.globalService.getrecords(this.tableName)
    s.subscribe((res) => {
      //  console.log(res)
      this.empData = res
      console.log(this.empData, "client data")
    })
  }

  delete(id: any) {
    this.globalService.deleteRecord(this.tableName, id).subscribe(() => {
      alert("delete record successfully")
      this.ngOnInit();
    })
  }

  orderbyaddress(val: any) {
    console.log(val)
    this.order = val
    this.reverse = !this.reverse
  }
}

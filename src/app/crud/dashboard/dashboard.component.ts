import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  term: any
  pageno: any
  empData: any
  order: string = 'address';
  reverse : boolean = false
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getrecords().subscribe((res) => {
      //  console.log(res)
      this.empData = res
      console.log(this.empData, "client data")
    })
    // let s = this.dataService.getrecords()
    // s.subscribe((res) => {
    //   //  console.log(res)
    //   this.empData = res
    //   console.log(this.empData, "client data")
    // })
  }

  delete(id: any) {
    this.dataService.deleteRecord(id).subscribe(() => {
      alert("delete record successfully")
      this.ngOnInit();
    })
  }

  orderbyaddress() {
    this.reverse = !this.reverse
  }
}

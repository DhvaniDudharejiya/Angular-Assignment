import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uname: any
  upass: any

  userData: any
  constructor(private globalservice: GlobalService , private router : Router) { }

  ngOnInit(): void {
  }
  getData() {
    console.log(this.uname, "Username", "+", this.upass)
    this.globalservice.getrecords("Users").subscribe((res) => {
      // console.log(res,"res--------------------------------------------------")
      this.userData = res
      const data = this.userData.filter((item: any) => {
        return ((item.username == this.uname) && (item.password == this.upass))
      })

      if (data.length > 0) {
        console.log("valid user")
        this.globalservice.signIn(this.uname)
        this.router.navigate(['/crud'])
      }
      else {
        console.log("invalid user")
        alert("Invalid Credentials")
        this.uname = ""
        this.upass = ""
      }
    })
  }

}

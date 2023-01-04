import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {


  courses: string[] = ['Angular', 'React', 'Python', 'Java', 'Selenium', 'C++']
  empData: any
  constructor() { }

  ngOnInit(): void {
    this.empData = new FormGroup({
      fname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]{3,30}')]),
      lname: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      courses: new FormControl('', [Validators.required]),
      mno: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10,10}')]),
      term: new FormControl('', [Validators.required])
    })
  }
  getData(val: any) {
    console.log(val)
  }

}

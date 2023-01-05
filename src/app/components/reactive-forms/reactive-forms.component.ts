import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { regExName } from 'src/app/shared/common-data/constanst';
import { regExcourses } from 'src/app/shared/common-data/constanst';


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {


  // courses: string[] = ['Angular', 'React', 'Python', 'Java', 'Selenium', 'C++']
  // empData: any
  // constructor() { }

  // ngOnInit(): void {
  //   this.empData = new FormGroup({
  //     fname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]{3,30}')]),
  //     lname: new FormControl('', [Validators.required]),
  //     password: new FormControl('', [Validators.required]),
  //     email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
  //     courses: new FormControl('', [Validators.required]),
  //     mno: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10,10}')]),
  //     term: new FormControl('', [Validators.required])
  //   })
  // }
  // getData(val: any) {
  //   console.log(val)
  // }

// ****************************************************************************************************
  // FormBuilder try for example

  courses = regExcourses//store array in contsatnt.ts file
  // courses: string[] = ['Angular', 'React', 'Python', 'Java', 'Selenium', 'C++']
  empData: any

  // inject formBuilder service dependency by specified it in the constructor
  constructor( private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.empData =this.formBuilder.group({
      fname:  ['', [Validators.required, Validators.pattern('[a-zA-Z]{3,30}')]],
      lname:  ['', [Validators.required]],
      // lname:  ['', [Validators.required, Validators.pattern('regExName')]],
      password:  ['', [Validators.required]],
      email:  ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      courses:  ['', [Validators.required]],
      mno:  ['', [Validators.required, Validators.pattern('[0-9]{10,10}')]],
      term:  ['', [Validators.required]]
    })
  }
  getData(val: any) {
    console.log(val)
  }

}

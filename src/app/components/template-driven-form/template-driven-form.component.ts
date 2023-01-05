import { Component, OnInit } from '@angular/core';
import { regExName } from 'src/app/shared/common-data/constanst';
@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  regexname = regExName  //constanst.ts file
  courses: string[] = ['Angular', 'React', 'Python', 'Java', 'Selenium', 'C++']
  constructor() { }

  ngOnInit(): void {
  }

  getData(val: any) {
    console.log(val)
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngFormComponent } from './components/ang-form/ang-form.component';
import { CarBikeAssignmentComponent } from './components/car-bike-assignment/car-bike-assignment.component';
import { Comp2Component } from './components/comp2/comp2.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { MyColorComponent } from './components/my-color/my-color.component';
import { ParentComponent } from './components/parent/parent.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { SwitchImgComponent } from './components/switch-img/switch-img.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';


const routes: Routes = [
  { path: "", component: DataBindingComponent },
  { path: "data-binding", component: DataBindingComponent },
  { path: "directives", component: DirectivesComponent },
  { path: "car-bike", component: CarBikeAssignmentComponent },
  { path: "switchimg", component: SwitchImgComponent },
  // {path:"directives",redirectTo:"pipe" pathMatch:"full"},//redirect
  { path: "parent", component: ParentComponent },

  { path: "pipe", component: PipeComponent },
  { path: "pipe/:id", component: PipeComponent },//show id in navigation
  { path: "pipe/:gender", component: PipeComponent },//show gender in navigation
  { path: "pipe/:address", component: PipeComponent },//show address in navigation
  { path: "pipe/:contact", component: PipeComponent },//show contact in navigation

  { path: "comp2", component: Comp2Component },
  { path: "mycolor", component: MyColorComponent },


  {
    path: "ang-form", component: AngFormComponent, children: [
      { path: "", component: TemplateDrivenFormComponent },//defualt show
      { path: "tdf", component: TemplateDrivenFormComponent },
      { path: "rf", component: ReactiveFormsComponent }
    ]
  },

//add module routing 
{ path: "crud", loadChildren: () => import("./crud/crud.module").then((m) => m.CrudModule) },


  // {path:"**",component:ReactiveFormsComponent} //wild
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

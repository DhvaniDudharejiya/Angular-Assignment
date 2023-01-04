import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngFormComponent } from './components/ang-form/ang-form.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { ParentComponent } from './components/parent/parent.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';


const routes: Routes = [
  { path: "data-binding", component: DataBindingComponent },
  { path: "directives", component: DirectivesComponent },
  // {path:"directives",redirectTo:"pipe" pathMatch:"full"},//redirect
  { path: "parent", component: ParentComponent },


  { path: "pipe", component: PipeComponent },
  { path: "pipe/:id", component: PipeComponent },//show id in navigation
  { path: "pipe/:gender", component: PipeComponent },//show gender in navigation
  { path: "pipe/:address", component: PipeComponent },//show address in navigation
  { path: "pipe/:contact", component: PipeComponent },//show contact in navigation



  {
    path: "ang-form", component: AngFormComponent, children: [
      { path: "", component: TemplateDrivenFormComponent },//defualt show
      { path: "tdf", component: TemplateDrivenFormComponent },
      { path: "rf", component: ReactiveFormsComponent }
    ]
  }


  // {path:"**",component:ReactiveFormsComponent} //wild
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

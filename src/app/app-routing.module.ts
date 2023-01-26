import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngFormComponent } from './components/ang-form/ang-form.component';
import { CarBikeAssignmentComponent } from './components/car-bike-assignment/car-bike-assignment.component';
import { Comp2Component } from './components/comp2/comp2.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { LoginComponent } from './components/login/login.component';
import { MyColorComponent } from './components/my-color/my-color.component';
import { ParentComponent } from './components/parent/parent.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { SwitchImgComponent } from './components/switch-img/switch-img.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { AuthGuard } from './shared/guards/auth.guard';


const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "data-binding", component: DataBindingComponent , canActivate:[AuthGuard]},
  { path: "directives", component: DirectivesComponent , canActivate:[AuthGuard] },
  { path: "car-bike", component: CarBikeAssignmentComponent , canActivate:[AuthGuard] },
  { path: "switchimg", component: SwitchImgComponent , canActivate:[AuthGuard] },
  // {path:"directives",redirectTo:"pipe" pathMatch:"full"},//redirect
  // { path: "parent", component: ParentComponent },
  { path: "parent", component: ParentComponent , canActivate:[AuthGuard] }, //graud
  { path: "pipe", component: PipeComponent  , canActivate:[AuthGuard]},
  { path: "pipe/:id", component: PipeComponent , canActivate:[AuthGuard] },//show id in navigation
  { path: "pipe/:gender", component: PipeComponent  , canActivate:[AuthGuard]},//show gender in navigation
  { path: "pipe/:address", component: PipeComponent , canActivate:[AuthGuard] },//show address in navigation
  { path: "pipe/:contact", component: PipeComponent , canActivate:[AuthGuard] },//show contact in navigation

  { path: "comp2", component: Comp2Component , canActivate:[AuthGuard] },
  { path: "mycolor", component: MyColorComponent , canActivate:[AuthGuard] },


  {
    path: "ang-form", component: AngFormComponent,  canActivate:[AuthGuard], children: [
      { path: "", component: TemplateDrivenFormComponent },//defualt show
      { path: "tdf", component: TemplateDrivenFormComponent },
      { path: "rf", component: ReactiveFormsComponent }
    ]
  },

//add module routing 
{ path: "crud" , canActivate:[AuthGuard], loadChildren: () => import("./crud/crud.module").then((m) => m.CrudModule) },


  // {path:"**",component:ReactiveFormsComponent} //wild
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SelectorComponent } from './components/selector/selector.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { SwitchImgComponent } from './components/switch-img/switch-img.component';
import { AttDirectivesComponent } from './components/att-directives/att-directives.component';
import { CarBikeAssignmentComponent } from './components/car-bike-assignment/car-bike-assignment.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { GenderPipe } from './shared/custom-pipe/gender.pipe';
import { SquarePipe } from './shared/custom-pipe/square.pipe';
import { AreaPipe } from './shared/custom-pipe/area.pipe';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { AngFormComponent } from './components/ang-form/ang-form.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { NavComponent } from './components/nav/nav.component';
import { Comp1Component } from './components/comp1/comp1.component';
import { Comp2Component } from './components/comp2/comp2.component';
import { ChangeColorDirective } from './custom-dir/change-color.directive';
import { MyColorComponent } from './components/my-color/my-color.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SelectorComponent,
    DataBindingComponent,
    DirectivesComponent,
    SwitchImgComponent,
    AttDirectivesComponent,
    CarBikeAssignmentComponent,
    PipeComponent,
    GenderPipe,
    SquarePipe,
    AreaPipe,
    ParentComponent,
    ChildComponent,
    AngFormComponent,
    ReactiveFormsComponent,
    TemplateDrivenFormComponent,
    NavComponent,
    Comp1Component,
    Comp2Component,
    ChangeColorDirective,
    MyColorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { CrudRoutingModule } from './crud-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';


@NgModule({
  declarations: [
    DashboardComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    OrderModule
  ]
})
export class CrudModule { }

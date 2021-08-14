import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesComponent } from './companies/companies.component';
import {RouterModule,Routes} from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { ProcessDetailComponent } from './process-detail/process-detail.component';
const routes: Routes = [
  {path:'interview-process',component:CompaniesComponent},
  {path:'interview-process/:id',component:ProcessDetailComponent}
];
@NgModule({
  declarations: [
    CompaniesComponent,
    ProcessDetailComponent
  ],
  imports: [
    CommonModule,RouterModule.forRoot(routes, 
),SharedModule
  ]
})
export class InterviewprocessModule { }

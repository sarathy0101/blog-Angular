import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ResumeVerifyComponent } from './resume-verify/resume-verify.component';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import {RouterModule,Routes} from '@angular/router';
const routes: Routes = [
  {path:'resume-correction',component:ResumeVerifyComponent}
];

@NgModule({
  declarations: [
    ResumeVerifyComponent
  ],
  imports: [
    CommonModule,RouterModule.forRoot(routes),FormsModule,ReactiveFormsModule,SharedModule
  ]
})
export class ResumesModule { }

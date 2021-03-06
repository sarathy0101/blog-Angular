import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PostDashboardComponent } from './post-dashboard/post-dashboard.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import {RouterModule,Routes} from '@angular/router';
import { FormsModule } from "@angular/forms";

import { ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
  {path:'blog',component:PostListComponent},
  {path:'blog/:id',component:PostDetailComponent},
  {path:'dashboard',component:PostDashboardComponent}
];
@NgModule({
  declarations: [
    PostDashboardComponent,
    PostDetailComponent,
    PostListComponent,
  ],
  imports: [
    SharedModule,RouterModule.forChild(routes),FormsModule,ReactiveFormsModule
  ]
})
export class PostsModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes,RouterModule} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {AngularFireModule} from '@angular/fire'
import {AngularFireAuthModule} from '@angular/fire/auth'
import {AngularFireStorageModule} from '@angular/fire/storage'
import {AngularFirestoreModule} from '@angular/fire/firestore'
import {environment} from '../environments/environment';
import { PostsModule } from './posts/posts.module'
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';

import {NgxPaginationModule} from 'ngx-pagination';
import { ResumesModule } from './resumes/resumes.module';
import { InterviewprocessModule } from './interviewprocess/interviewprocess.module';


const routes:Routes=[
  {
    path:'',redirectTo:'/blog',pathMatch:'full'
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    
    NgxPaginationModule,
    AppRoutingModule,BrowserAnimationsModule,RouterModule.forRoot(routes),
    CoreModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,AngularFireStorageModule,AngularFirestoreModule, PostsModule,FormsModule,NgxPaginationModule,ReactiveFormsModule, ResumesModule, InterviewprocessModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

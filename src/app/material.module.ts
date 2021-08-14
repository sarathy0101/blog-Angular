import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatButtonModule,MatToolbarModule,MatExpansionModule,MatInputModule,MatProgressBarModule,MatCardModule,MatIconModule,MatPaginatorModule
  ],exports:[MatButtonModule,MatToolbarModule,MatExpansionModule,MatInputModule,MatProgressBarModule,MatCardModule,MatIconModule,MatPaginatorModule]
})
export class MaterialModule { }

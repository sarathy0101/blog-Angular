import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';

import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatButtonModule,MatToolbarModule,MatExpansionModule,MatInputModule,MatProgressBarModule
  ],exports:[MatButtonModule,MatToolbarModule,MatExpansionModule,MatInputModule,MatProgressBarModule]
})
export class MaterialModule { }

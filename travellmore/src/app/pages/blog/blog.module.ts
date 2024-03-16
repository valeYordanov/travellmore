import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsListComponent } from './blogs-list/blogs-list.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    BlogsListComponent,
    MainComponent,
   
  ],
  imports: [
    CommonModule,HttpClientModule,FormsModule
  ],
  exports:[BlogsListComponent,MainComponent]
})
export class BlogModule { }

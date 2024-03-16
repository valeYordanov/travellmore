import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsListComponent } from './blogs-list/blogs-list.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { HomeBlogsComponent } from './home-blogs/home-blogs.component';

@NgModule({
  declarations: [BlogsListComponent, HomeBlogsComponent],
  imports: [CommonModule, HttpClientModule, FormsModule],
  exports: [BlogsListComponent,HomeBlogsComponent],
})
export class BlogModule {}

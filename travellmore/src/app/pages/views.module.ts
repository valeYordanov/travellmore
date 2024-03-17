import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsListComponent } from './blog/blogs-list/blogs-list.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { HomeBlogsComponent } from './blog/home-blogs/home-blogs.component';
import { AddJourneyComponent } from './add-journey/add-journey.component';

@NgModule({
  declarations: [BlogsListComponent, HomeBlogsComponent,AddJourneyComponent],
  imports: [CommonModule, HttpClientModule, FormsModule ,HttpClientModule],
  exports: [BlogsListComponent,HomeBlogsComponent,AddJourneyComponent],
})
export class BlogModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsListComponent } from './blog/blogs-list/blogs-list.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { HomeBlogsComponent } from './blog/home-blogs/home-blogs.component';
import { AddJourneyComponent } from './add-journey/add-journey.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BlogsListComponent, HomeBlogsComponent,AddJourneyComponent, PostDetailsComponent],
  imports: [CommonModule, HttpClientModule, FormsModule ,HttpClientModule,RouterModule],
  exports: [BlogsListComponent,HomeBlogsComponent,AddJourneyComponent,PostDetailsComponent],
})
export class ViewsModule {}

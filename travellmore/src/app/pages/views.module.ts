import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsListComponent } from './blog/blogs-list/blogs-list.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { HomeBlogsComponent } from './blog/home-blogs/home-blogs.component';
import { AddJourneyComponent } from './add-journey/add-journey.component';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';
import { RouterModule } from '@angular/router';
import { BlogEditComponent } from './blog/blog-edit/blog-edit.component';
import { SharedModule } from '../shared/shared.module';

import { BlogCommentsComponent } from './blog-comments/blog-comments.component';

@NgModule({
  declarations: [
    BlogsListComponent,
    HomeBlogsComponent,
    AddJourneyComponent,
    BlogDetailsComponent,
    BlogEditComponent,
    BlogCommentsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    BlogsListComponent,
    HomeBlogsComponent,
    AddJourneyComponent,
    BlogDetailsComponent,
    BlogsListComponent,
    BlogCommentsComponent,
  ],
})
export class ViewsModule {}

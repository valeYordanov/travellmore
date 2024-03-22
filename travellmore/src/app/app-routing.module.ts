import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { BlogsListComponent } from './pages/blog/blogs-list/blogs-list.component';
import { AddJourneyComponent } from './pages/add-journey/add-journey.component';
import { BlogDetailsComponent } from './pages/blog/blog-details/blog-details.component';
import { BlogEditComponent } from './pages/blog/blog-edit/blog-edit.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'blogs',
    component: BlogsListComponent,
  },
  {
    path: 'blogs/:id',
    component: BlogDetailsComponent,
  }
  ,
  {
    path: 'blogs/:id/edit',
    component: BlogEditComponent,
  },
  {
    path: 'add-journey',
    component: AddJourneyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

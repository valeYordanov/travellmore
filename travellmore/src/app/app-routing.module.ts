import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { BlogsListComponent } from './pages/blog/blogs-list/blogs-list.component';
import { AddJourneyComponent } from './pages/add-journey/add-journey.component';
import { BlogDetailsComponent } from './pages/blog/blog-details/blog-details.component';
import { BlogEditComponent } from './pages/blog/blog-edit/blog-edit.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { EditProfileComponent } from './user/edit-profile/edit-profile.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { AuthActivate } from './guards/auth.guard';

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
    component: BlogDetailsComponent, canActivate: [AuthActivate]
  },
  {
    path: 'blogs/:id/edit',
    component: BlogEditComponent, canActivate : [AuthActivate]
  },
  {
    path: 'add-journey',
    component: AddJourneyComponent, canActivate : [AuthActivate]
  },

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'profile/:id',

    component: ProfileComponent, 
  },
  {
    path: 'profile/:id/edit',

    component: EditProfileComponent, 
  },
  {
    path: 'reviews',
    component : ReviewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

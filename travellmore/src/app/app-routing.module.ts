import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


import { BlogsListComponent } from './pages/blog/blogs-list/blogs-list.component';
import { AddJourneyComponent } from './pages/add-journey/add-journey.component';


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
    path: "add-journey",
    component:AddJourneyComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

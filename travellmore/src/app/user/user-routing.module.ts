import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';



const routes: Routes = [
  
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'**',redirectTo:"/404"
 },
 {
   path:'404',component:PageNotFoundComponent
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
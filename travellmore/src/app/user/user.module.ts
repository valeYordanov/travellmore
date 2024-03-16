import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { UserRoutingModule } from './user-routing.module';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,UserRoutingModule,FormsModule
  ],
  exports:[LoginComponent,RegisterComponent,ProfileComponent,PageNotFoundComponent]
})
export class UserModule { }

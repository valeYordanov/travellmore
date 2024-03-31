import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { UserRoutingModule } from './user-routing.module';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { EditProfileComponent } from './edit-profile/edit-profile.component';





@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    PageNotFoundComponent,
    EditProfileComponent,
    
    
  ],
  imports: [
    CommonModule,UserRoutingModule,FormsModule,SharedModule
  ],
  exports:[LoginComponent,RegisterComponent,ProfileComponent,PageNotFoundComponent,EditProfileComponent]
})
export class UserModule { }

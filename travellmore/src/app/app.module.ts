import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './shared/shared.module';
import {  ViewsModule } from './pages/views.module';
import { UserModule } from './user/user.module';
import { UserRoutingModule } from './user/user-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/app/enviroments/enviroments';
import{AngularFireDatabaseModule} from '@angular/fire/compat/database'
import { AngularFireDatabase } from '@angular/fire/compat/database'
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ProfileService } from './shared/services/profile.service';






@NgModule({
  declarations: [AppComponent, HomeComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    UserModule,
    ViewsModule,
    
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent],
})
export class AppModule {}

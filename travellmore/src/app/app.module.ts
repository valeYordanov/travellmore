import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './shared/shared.module';
import { ViewsModule } from './pages/views.module';


import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/enviroments/enviroments';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { AppInterceptor } from './interceptor/app.interceptor';
import { FormsModule } from '@angular/forms';
import { UserModule } from './user/user.module';
import { ProfileService } from './services/services/profile.service';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    UserModule,
    ViewsModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true },
  ProfileService],
  bootstrap: [AppComponent],
})
export class AppModule {}

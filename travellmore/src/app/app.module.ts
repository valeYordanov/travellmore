import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule} from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './shared/shared.module';
import { BlogModule } from './pages/blog/blog.module';
import { UserModule } from './user/user.module';
import { UserRoutingModule } from './user/user-routing.module';
import { HomeBlogsComponent } from './pages/blog/home-blogs/home-blogs.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
    
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    UserModule,
    BlogModule,
    UserRoutingModule,
    HttpClientModule,
    
    
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

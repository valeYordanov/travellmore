import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { ToasterComponent } from './toaster/toaster.component';



@NgModule({
  declarations: [
    WelcomeComponent,
    LoadingSpinnerComponent,
    ToasterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[WelcomeComponent,LoadingSpinnerComponent,ToasterComponent]
})
export class SharedModule { }

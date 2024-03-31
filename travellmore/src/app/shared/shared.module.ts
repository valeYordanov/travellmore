import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [WelcomeComponent, LoadingSpinnerComponent],
  imports: [CommonModule],
  exports: [WelcomeComponent, LoadingSpinnerComponent],
})
export class SharedModule {}

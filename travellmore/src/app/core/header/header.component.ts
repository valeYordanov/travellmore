import { Component } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isLoggedIn: boolean = true;
  constructor(private apiService: ApiService) {}
  onSwitch() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  // populateData() {
  //   this.apiService.storeJourneys()
  // }

}

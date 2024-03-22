import { Component } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { JourneyService } from 'src/app/shared/services/journey.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isLoggedIn: boolean = true;
  constructor(private journeyService:JourneyService) {}
  onSwitch() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  // populateData() {
  //   this.apiService.storeJourneys()
  // }

  onFetchdata(){
    this.journeyService.fetchJourneys()
  }
}

import { Component, OnInit } from '@angular/core';
import { Journey } from '../journey-type/Journey';

import { JourneyService } from 'src/app/shared/services/journey.service';

@Component({
  selector: 'app-home-blogs',
  templateUrl: './home-blogs.component.html',
  styleUrls: ['./home-blogs.component.css'],
})
export class HomeBlogsComponent implements OnInit {
  constructor(private journeyService:JourneyService) {}
  journeys: Journey[] = [];

  ngOnInit(): void {
    this.journeyService.fetchJourneys().subscribe(res => {
      this.journeys = res
      
    })

    
  }

}

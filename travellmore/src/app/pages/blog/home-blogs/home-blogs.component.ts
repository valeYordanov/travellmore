import { Component, OnInit } from '@angular/core';
import { Journey } from '../journey-type/Journey';

import { JourneyService } from 'src/app/shared/services/journey.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-home-blogs',
  templateUrl: './home-blogs.component.html',
  styleUrls: ['./home-blogs.component.css'],
})
export class HomeBlogsComponent implements OnInit {
  constructor(
    private journeyService: JourneyService,
    private auth: AngularFireAuth
  ) {}
  journeys: Journey[] = [];

  ngOnInit(): void {
    
    this.journeyService.fetchJourneysByDate().subscribe(res => {
      this.journeys = res
      console.log(this.journeys);
      
    })
  }
}

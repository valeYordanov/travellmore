import { Component, OnDestroy, OnInit } from '@angular/core';
import { Journey } from '../../../types/journey-type/Journey';

import { JourneyService } from 'src/app/services/services/journey.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-blogs',
  templateUrl: './home-blogs.component.html',
  styleUrls: ['./home-blogs.component.css'],
})
export class HomeBlogsComponent implements OnInit,OnDestroy {
  constructor(
    private journeyService: JourneyService,
    private auth: AngularFireAuth
  ) {}
  journeys: Journey[] = [];
  sub?:Subscription
  ngOnInit(): void {
    
    this.sub=this.journeyService.fetchJourneysByDate().subscribe(res => {
      this.journeys = res
      
      
    })
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }
}

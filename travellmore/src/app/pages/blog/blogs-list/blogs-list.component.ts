import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Journey } from '../types/Journey';
import { JourneyService } from 'src/app/shared/services/journey.service';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css'],
})
export class BlogsListComponent implements OnInit {
  journeys: Journey[] = [];

  filteredJourneys: Journey[] = [];
  constructor(
    private apiService: ApiService,
    private journeyService: JourneyService
  ) {
    this.journeys = this.journeyService.getJourneys();
    this.filteredJourneys = this.journeys;
  }

  ngOnInit(): void {
    this.apiService.getJourneys().subscribe((journeys) => {
      this.journeys = journeys;
    });
  }

  search(text: string) {
    if (!text) {
      this.filteredJourneys = this.journeys;
      return;
    }
    this.filteredJourneys = this.journeys.filter((journey) =>
      journey.location.toLocaleLowerCase().includes(text.toLowerCase())
    );
  }
}

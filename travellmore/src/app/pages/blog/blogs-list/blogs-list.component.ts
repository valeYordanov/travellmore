import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Journey } from '../types/Journey';
import { JourneyService } from 'src/app/shared/services/journey.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css'],
})
export class BlogsListComponent implements OnInit {
  journeys: Journey[] = [];

  filteredJourneys: Journey[] = [];
  constructor(journeyService: JourneyService, private apiService: ApiService) {
    this.journeys = journeyService.getJourneys();
    this.filteredJourneys = this.journeys;
  }

  ngOnInit(): void {
    this.apiService.getJourneys().subscribe((journeys) => {
      this.journeys = journeys;
    });
  }

  search(form: NgForm) {
    const { searchTerm } = form?.value;

    if(form.invalid){
      return
    }

    if (!searchTerm) {
      this.filteredJourneys = this.journeys;

      return;
    }

    this.filteredJourneys = this.journeys.filter((journey) =>
      journey.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    form.reset();
  }
}

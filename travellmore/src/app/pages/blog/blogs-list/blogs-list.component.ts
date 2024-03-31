import { Component, OnInit } from '@angular/core';
import { Journey } from '../journey-type/Journey';
import { JourneyService } from 'src/app/shared/services/journey.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css'],
})
export class BlogsListComponent implements OnInit {
  isLoading = true;
  journeys: Journey[] = [];
  filteredJourneys: Journey[] = [];

  constructor(private journeyService: JourneyService) {}

  ngOnInit(): void {
    this.journeyService.fetchJourneys().subscribe((data) => {
      this.journeys = data;
      console.log(data);

      this.filteredJourneys = this.journeys;
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    });
  }

  search(form: NgForm) {
    const { searchTerm } = form.value;

    if (!searchTerm) {
      this.filteredJourneys = this.journeys;

      return;
    }

    this.filteredJourneys = this.journeys.filter((journey) =>
      journey.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    form.reset();
  }
}

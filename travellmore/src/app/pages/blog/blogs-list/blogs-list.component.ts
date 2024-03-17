import { Component, OnInit } from '@angular/core';
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
  constructor(private journeyService: JourneyService) {}

  ngOnInit(): void {
    this.journeyService.fetchJourneys().subscribe((res) => {
      this.journeys = res;
      this.filteredJourneys = res;
    });
  }

  search(form: NgForm) {
    const { searchTerm } = form?.value;

    // if(form.invalid){
    //   return
    // }

    if (!searchTerm) {
      this.filteredJourneys = this.journeys;

      return;
    }

    this.filteredJourneys = this.journeys.filter((journey) =>
      journey.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    form.reset();
  }

  deleteData() {
    this.journeyService.deleteJourneys().subscribe(() => {
      this.journeys = [];
    });
  }
}

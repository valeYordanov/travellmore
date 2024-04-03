import { Component, OnDestroy, OnInit } from '@angular/core';
import { Journey } from '../../../types/journey-type/Journey';
import { JourneyService } from 'src/app/services/services/journey.service';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css'],
})
export class BlogsListComponent implements OnInit,OnDestroy {
  notFindingTitle: boolean = false;
  isLoading = true;
  journeys: Journey[] = [];
  filteredJourneys: Journey[] = [];

  subscription?:Subscription[] =[]

  constructor(
    private journeyService: JourneyService,
    private auth: AngularFireAuth
  ) {}

  ngOnInit(): void {
    this.subscription?.push(this.journeyService.fetchJourneys().subscribe((data) => {
      this.journeys = data;

      this.filteredJourneys = this.journeys;
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    }));

    this.auth.authState.subscribe(user => {
      const token = user?.getIdToken()
      console.log(token);
      
    })
  }

  search(form: NgForm) {
    const { searchTerm } = form.value;

    if (!searchTerm) {
      this.filteredJourneys = this.journeys;

      return;
    }
    this.notFindingTitle = false;
    this.filteredJourneys = this.journeys.filter((journey) =>
      journey.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (this.filteredJourneys.length === 0) {
      this.notFindingTitle = true;
    }
  }
  ngOnDestroy(): void {
    this.subscription?.forEach(sub => {
      sub.unsubscribe()
    });
  }
}

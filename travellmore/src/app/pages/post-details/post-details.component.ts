import { Component, OnInit } from '@angular/core';
import { Journey } from '../blog/types/Journey';
import { JourneyService } from 'src/app/shared/services/journey.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent implements OnInit {
  journeys: Journey[] = [];

  journey: any;

  id?: string;

  constructor(
    private journeyService: JourneyService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.journeyService.getJourneysById(this.id).subscribe((res) => {
      this.journey = res;
    });
  }

  deletePost() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.journeyService.deleteJourneyById(this.id).subscribe(() => {
      this.router.navigate(['/blogs']);
    });
  }
}

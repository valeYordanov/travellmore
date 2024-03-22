import { Component, Input, OnInit } from '@angular/core';
import { Journey } from '../types/Journey';
import { JourneyService } from 'src/app/shared/services/journey.service';

import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css'],
})
export class BlogDetailsComponent implements OnInit {
  journeys: Journey[] = [];

  journey?:Journey 

  @Input()id: string | undefined;
  

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

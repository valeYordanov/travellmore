import { Component, Input, OnInit } from '@angular/core';
import { Journey } from '../journey-type/Journey';
import { JourneyService } from 'src/app/shared/services/journey.service';

import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CommentService } from 'src/app/shared/services/comments.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css'],
})
export class BlogDetailsComponent implements OnInit {
  journey?: Journey;

  @Input() id: string | undefined;

  currentUser?: string;

  constructor(
    private journeyService: JourneyService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private auth: AngularFireAuth,
    
  ) {}

  ngOnInit(): void {
    this.auth.authState.subscribe((user) => {
      this.currentUser = user?.uid;
    });
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

  isOwner(ownerId: string): boolean {
    return this.currentUser === ownerId;
  }
}

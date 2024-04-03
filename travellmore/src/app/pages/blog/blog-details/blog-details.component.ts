import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Journey } from 'src/app/types/journey-type/Journey';
import { JourneyService } from 'src/app/services/services/journey.service';

import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CommentService } from 'src/app/services/services/comments.service';
import { Subscription, map } from 'rxjs';


@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css'],
})
export class BlogDetailsComponent implements OnInit , OnDestroy {
  journey?: Journey;

  @Input() id: string | undefined;

  currentUser?: string;

  likes: number[] = []
  data?:Journey
  subscription = new Subscription()
  

  constructor(
    private journeyService: JourneyService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private auth: AngularFireAuth
  ) {}

  ngOnInit(): void {
    this.subscription.add(this.auth.authState.subscribe((user) => {
      this.currentUser = user?.uid;
    }));
    this.id = this.activatedRoute.snapshot.params['id'];

    this.subscription.add(this.journeyService.getJourneysById(this.id).subscribe((res) => {
      this.journey = res;
    }));
  }

  deletePost() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.subscription.add(this.journeyService.deleteJourneyById(this.id).subscribe(() => {
      this.router.navigate(['/blogs']);
    }));
  }

  isOwner(ownerId: string | undefined): boolean {
    return this.currentUser === ownerId;
    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
  
}

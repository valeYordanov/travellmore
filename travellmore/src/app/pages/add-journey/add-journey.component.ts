import { Component } from '@angular/core';

import { JourneyService } from 'src/app/shared/services/journey.service';

import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Journey } from '../blog/journey-type/Journey';

@Component({
  selector: 'app-add-journey',
  templateUrl: './add-journey.component.html',
  styleUrls: ['./add-journey.component.css'],
})
export class AddJourneyComponent {
  constructor(private journeyService: JourneyService, private router: Router) {}
  userId?: string;

  createPost(postData: Journey) {
    this.journeyService
      .storeJourneys(
        postData.title,
        postData.desc,
        postData.author,
        postData.date,
        postData.img,
        postData.content,
        postData.ownerId
      )
      .subscribe(() => {
        this.router.navigate(['/blogs']);
      });
  }
}

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Journey } from '../blog/types/Journey';
import { JourneyService } from 'src/app/shared/services/journey.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-add-journey',
  templateUrl: './add-journey.component.html',
  styleUrls: ['./add-journey.component.css'],
})
export class AddJourneyComponent {
  constructor(private journeyService: JourneyService, private router: Router) {}

  createPost(postData: Journey) {
    this.journeyService
      .storeJourneys(
        postData.title,
        postData.desc,
        postData.author,
        postData.date,
        postData.img,
        postData.content
      ).subscribe(() =>{
        this.router.navigate(['/blogs'])
      })
      
  }
}

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Journey } from '../blog/types/Journey';
import { JourneyService } from 'src/app/shared/services/journey.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-journey',
  templateUrl: './add-journey.component.html',
  styleUrls: ['./add-journey.component.css'],
})
export class AddJourneyComponent {
  constructor(private journeyService: JourneyService) {}
  createPost(form: NgForm, postData: Journey) {
    this.journeyService.storeJourneys(
      postData.title,
      postData.desc,
      postData.author,
      postData.date,
      postData.img,
      postData.content
    );

    form.reset();
  }
}

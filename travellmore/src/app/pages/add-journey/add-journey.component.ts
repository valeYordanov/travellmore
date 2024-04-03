import { Component } from '@angular/core';

import { JourneyService } from 'src/app/services/services/journey.service';

import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Journey } from '../../types/journey-type/Journey';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-journey',
  templateUrl: './add-journey.component.html',
  styleUrls: ['./add-journey.component.css'],
})
export class AddJourneyComponent {
  constructor(private journeyService: JourneyService, private router: Router,private auth:AngularFireAuth) {
    this.auth.authState.subscribe(user => {
        this.userId = user!.uid
    })
  }
  userId?: any

  
  postData : Journey = {
    title: '',
    desc: '',
    author: '',
    date: '',
    img: '',
    content: '',
    ownerId:this.userId,
    
  }

  createPost(f:NgForm) {
    if(f.invalid){
      return
    }

    this.postData = f.value as Journey
    this.journeyService
      .storeJourneys(
        this.postData.title,
        this.postData.desc,
        this.postData.author,
        this.postData.date,
        this.postData.img,
        this.postData.content,
        this.postData.ownerId,
        

      )
      .subscribe(() => {
        this.router.navigate(['/blogs']);
      });
  }
}

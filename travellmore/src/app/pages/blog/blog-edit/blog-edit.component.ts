import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Journey } from '../../../types/journey-type/Journey';
import { NgForm } from '@angular/forms';
import { JourneyService } from 'src/app/services/services/journey.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css'],
})
export class BlogEditComponent implements OnInit {
  editedJourney?: Journey;

  @ViewChild('postForm', { static: false }) updateForm?: NgForm;
  id!: string | undefined;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private journeyService: JourneyService
  ) {}
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.journeyService.getJourneysById(this.id).subscribe((res) => {
      this.editedJourney = res;
      this.updateForm?.setValue({
        title: this.editedJourney.title,
        desc: this.editedJourney.desc,
        author: this.editedJourney.author,
        date: this.editedJourney.date,
        img: this.editedJourney.img,
        content: this.editedJourney.content,
      });
    });
  }
  goBack() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.router.navigate([`/blogs/${this.id}`]);
  }

  postForm: Journey = {
    title: '',
    desc: '',
    author: '',
    date: '',
    img: '',
    content: '',
  };

  updateJourney(form:NgForm) {
    if(form.invalid){
      return
    }

    this.postForm = form.value as Journey
    this.id = this.activatedRoute.snapshot.params['id'];
    this.journeyService.updateJourneyById(this.id, this.postForm).subscribe(() => {
      this.router.navigate([`/blogs/${this.id}`]);
    });
  }
}

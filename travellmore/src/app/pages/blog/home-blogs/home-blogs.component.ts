import { Component, OnInit } from '@angular/core';
import { Journey } from '../types/Journey';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-home-blogs',
  templateUrl: './home-blogs.component.html',
  styleUrls: ['./home-blogs.component.css'],
})
export class HomeBlogsComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  journeys: Journey[] = [];

  ngOnInit(): void {
    this.apiService.getJourneys().subscribe(journey =>{
      this.journeys = journey
    })
  }

}

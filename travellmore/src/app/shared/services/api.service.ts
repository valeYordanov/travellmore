import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Journey } from 'src/app/pages/blog/types/Journey';
import { JourneyService } from './journey.service';


@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(
    private http: HttpClient,
    private journeyService: JourneyService
  ) {}

  storeJourneys() {
    const journeys = this.journeyService.getJourneys();
    return this.http
      .put(
        'https://travellmore-91a7f-default-rtdb.europe-west1.firebasedatabase.app/journeys.json',
        journeys
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  getJourneys() {
    return this.http.get<Journey[]>(
      'https://travellmore-91a7f-default-rtdb.europe-west1.firebasedatabase.app/journeys.json'
    );
  }
}

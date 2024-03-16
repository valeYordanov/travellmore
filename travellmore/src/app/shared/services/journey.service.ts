import { Injectable } from '@angular/core';

import { Journey } from 'src/app/pages/blog/types/Journey';
@Injectable({ providedIn: 'root' })
export class JourneyService {
  private journeys: Journey[] = [
    new Journey(
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/All_Gizah_Pyramids.jpg/1280px-All_Gizah_Pyramids.jpg',
      'Giza',
      'These ancient Egyptian monuments are still a source of speculation and debate.',
      "07.02.2023",23
    ),
    new Journey("https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/1280px-Machu_Picchu%2C_Peru.jpg","Machu Picchu","Machu Picchu is a top attraction and the main reason to get on the plane and visit Peru in South America. Visiting Machu Picchu should be the highlight of your travels, but planning this trip can be challenging. Our travel guide covers essential things to know, tickets, fees, accommodation, how to get, trains, shuttle buses, treks, tours, or altitude.","08.03.2024",40)
  ];

  getJourneys() {
    return this.journeys;
  }
}

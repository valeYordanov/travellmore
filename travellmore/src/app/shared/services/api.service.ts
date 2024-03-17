import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Journey } from 'src/app/pages/blog/types/Journey';
import { JourneyService } from './journey.service';
import { map } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(
    private http: HttpClient,
    private journeyService: JourneyService
  ) {}

  }

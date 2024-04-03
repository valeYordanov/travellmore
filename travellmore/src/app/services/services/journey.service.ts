import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { Observable, Subscription, map } from 'rxjs';

import { Journey } from 'src/app/types/journey-type/Journey';

@Injectable({ providedIn: 'root' })
export class JourneyService  {
  subscription?: Subscription;
  journeys: Journey[] = [];
  constructor(private http: HttpClient, private auth: AngularFireAuth) {
    this.auth.authState.subscribe((res) => {
      this.uid = res?.uid;
    });
  }
  uid?: string;
  storeJourneys(
    title: string,
    desc: string,
    author: string,
    date: string,
    img: string,
    content: string,
    id?: string
  ) {
    const postData: Journey = {
      title: title,
      desc: desc,
      author: author,
      date: date,
      img: img,
      content: content,
      ownerId: this.uid,
      id: id,
    };

    return this.http.post<Journey>(
      'https://travellmore-91a7f-default-rtdb.europe-west1.firebasedatabase.app/journeys.json',
      postData
    );
  }

  fetchJourneys() {
    return this.http
      .get<Journey[]>(
        'https://travellmore-91a7f-default-rtdb.europe-west1.firebasedatabase.app/journeys.json'
      )
      .pipe(
        map((res) => {
          const journeyArray: Journey[] = [];
          for (let key in res) {
            journeyArray.push({ ...res[key], id: key });
          }

          return journeyArray;
        })
      );
  }

  fetchJourneysByDate() {
    return this.http
      .get<Journey[]>(
        'https://travellmore-91a7f-default-rtdb.europe-west1.firebasedatabase.app/journeys.json?orderBy="date"&limitToLast=3'
      )
      .pipe(
        map((res) => {
          const journeydate: Journey[] = [];
          for (let key in res) {
            journeydate.push({ ...res[key], id: key });
          }
          journeydate.reverse();

          return journeydate;
        })
      );
  }

  getJourneysById(id: string | undefined): Observable<Journey> {
    return this.http.get<Journey>(
      `https://travellmore-91a7f-default-rtdb.europe-west1.firebasedatabase.app/journeys/${id}.json`
    );
  }

  deleteJourneys() {
    return this.http.delete(
      'https://travellmore-91a7f-default-rtdb.europe-west1.firebasedatabase.app/journeys.json'
    );
  }

  deleteJourneyById(id: string | undefined): Observable<Journey> {
    return this.http.delete<Journey>(
      `https://travellmore-91a7f-default-rtdb.europe-west1.firebasedatabase.app/journeys/${id}.json`
    );
  }

  updateJourneyById(
    id: string | undefined,
    postData: Journey
  ): Observable<Journey> {
    return this.http.patch<Journey>(
      `https://travellmore-91a7f-default-rtdb.europe-west1.firebasedatabase.app/journeys/${id}.json`,
      postData
    );
  }

  
}

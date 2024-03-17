import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

import { Journey } from 'src/app/pages/blog/types/Journey';
@Injectable({ providedIn: 'root' })
export class JourneyService {
  constructor(private http: HttpClient) {}
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
      id: id,
    };

    this.http
      .post(
        'https://travellmore-91a7f-default-rtdb.europe-west1.firebasedatabase.app/journeys.json',
        postData
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  fetchJourneys() {
    return this.http
      .get<{ [key: string]: Journey }>(
        'https://travellmore-91a7f-default-rtdb.europe-west1.firebasedatabase.app/journeys.json'
      )
      .pipe(
        map((res) => {
          const journeysArray: Journey[] = [];
          for (const key in res) {
            journeysArray.push({ ...res[key], id: key });
          }
          return journeysArray;
        })
      );
  }

  deleteJourneys(){
    return this.http.delete('https://travellmore-91a7f-default-rtdb.europe-west1.firebasedatabase.app/journeys.json')
  }
}

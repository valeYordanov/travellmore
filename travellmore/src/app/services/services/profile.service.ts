import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { User } from 'src/app/types/user-type/authUser';
import { map } from 'rxjs';
import { Journey } from 'src/app/types/journey-type/Journey';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  uid!: string;
  users: User[] = [];

  constructor(private http: HttpClient,private auth:AngularFireAuth) {}
  storeUsers(
    email: string,
    username: string,
    country: string,
    tel: string,
    userid?: string
  ) {
    const userData: User = {
      email: email,
      username: username,
      country: country,
      tel: tel,
      userid: userid,
    };

    return this.http.post<User[]>(
      `https://travellmore-91a7f-default-rtdb.europe-west1.firebasedatabase.app/users.json`,
      userData
    );
  }

  getCurrentUserUid(): Observable<string | null> {
    return this.auth.authState.pipe(map((user) => (user ? user.uid : null)));
  }

  getUsers() {
    return this.http
      .get<User[]>(
        'https://travellmore-91a7f-default-rtdb.europe-west1.firebasedatabase.app/users.json'
      )
      .pipe(
        map((res) => {
          const userArray: User[] = [];
          for (let key in res) {
            userArray.push({ ...res[key], id: key });
          }

          return userArray;
        })
      );
  }

  getUserById(id: string | undefined): Observable<User> {
    return this.http.get<User>(
      `https://travellmore-91a7f-default-rtdb.europe-west1.firebasedatabase.app/users/${id}.json`
    );
  }

  updateUserById(id: string | undefined,userData:User): Observable<User> {
    return this.http.patch<User>(
      `https://travellmore-91a7f-default-rtdb.europe-west1.firebasedatabase.app/users/${id}.json`,userData
    );
  }
  getUserJourneysCount(userId: string | null ): Observable<number> {
    return this.http.get<number>(`https://travellmore-91a7f-default-rtdb.europe-west1.firebasedatabase.app/journeys.json?orderBy="ownerId"&equalTo="${userId}"`)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/user/user-type/user';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}


  register(email:string,password:string,){
    return this.http.post<User>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDe3KUweEF4senBxupnlBuNi2qdQe-wZN8" , {
      email:email,
      password:password,
      returnSecureToken:true
    })
  }
}

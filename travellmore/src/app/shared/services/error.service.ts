import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserService } from './user.service';

@Injectable({ providedIn: 'root' })
export class ErrorService {
  constructor(private userService: UserService) {}
  error$$ = new BehaviorSubject(null);
  public error$ = this.error$$.asObservable();

  
}

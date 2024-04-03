import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ProfileService } from '../services/services/profile.service';
import { UserService } from '../services/services/user.service';


@Injectable({ providedIn: 'root' })
export class AuthActivate implements CanActivate {
  constructor(private auth: AngularFireAuth,private router:Router) {}

  async canActivate(): Promise<any> {
    return this.auth.currentUser.then(user => {
      if(user){
        return true
      }else{
        this.router.navigate(['/login'])
        return false
      }
    })
  }
}
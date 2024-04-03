import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, map, tap } from 'rxjs';

import { ProfileService } from 'src/app/services/services/profile.service';
import { UserService } from 'src/app/services/services/user.service';
import { User } from 'src/app/types/user-type/authUser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isAuthenticated = false;
  isLogedIn = false
  
  constructor(
    private auth: AngularFireAuth,

    private userService: UserService,
    private profileService: ProfileService
  ) {}
  user?: User;
  id?: string;
  currentUser?: string | null;

  ngOnInit(): void {
    this.auth.authState.subscribe((user) => {
      this.isAuthenticated = !user ? false : true;
      
    });

    this.profileService.getUsers().subscribe((data) => {
      for (let item of data) {
        this.getCurrentUserUid().subscribe(res => {
          this.currentUser = res
          if(item.userid === this.currentUser){
            this.id = item.id
          }
        })
      }
    });
  }

  loggingOut() {
    
    this.userService.logout();
  }

  getCurrentUserUid(): Observable<string | null> {
    return this.auth.authState.pipe(map((user) => (user ? user.uid : null)));
  }

  
}

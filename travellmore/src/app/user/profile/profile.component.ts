import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../types/user-type/authUser';
import { ProfileService } from 'src/app/services/services/profile.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, map } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  id?: string;
  countOfJourneys?: number;
  user?: User;
  currentUser!: string | null;
  isLoading:boolean = true

  constructor(private profileService: ProfileService) {}
  ngOnInit(): void {
    this.profileService.getUsers().subscribe((data) => {
      for (let item of data) {
        this.profileService.getCurrentUserUid().subscribe((res) => {
          this.currentUser = res;
          if (item.userid === this.currentUser) {
            this.id = item.id;
            this.profileService.getUserById(this.id).subscribe((userData) => {
              this.user = userData;
            });
          }
        });
        setTimeout(() => {
          this.isLoading = false;
        }, 500);
      }
    });

    this.profileService.getCurrentUserUid().subscribe((res) => {
      this.currentUser = res;
      this.profileService
        .getUserJourneysCount(this.currentUser)
        .subscribe((res) => {
          this.countOfJourneys = Object.keys(res).length;
        });
    });
  }
}

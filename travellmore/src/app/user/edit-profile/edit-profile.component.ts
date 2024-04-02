import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { User } from '../user-type/authUser';
import { Observable, map } from 'rxjs';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  id?: string;

  currentUser!: string | null;
  editedUser?: User;

  @ViewChild('form', { static: false }) updateEditForm?: NgForm;
  constructor(
    private profileService: ProfileService,

    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.profileService.getUserById(this.id).subscribe((res) => {
      this.editedUser = res;
      this.updateEditForm?.setValue({
        username: this.editedUser.username,
        
        tel: this.editedUser.tel,
        country: this.editedUser.country,
      });
    });
  }
  profileDetails : User = {
    email: '',
    username: '',
    tel: '',
    country: ''
  }

  updateProfile(form:NgForm) {
    if(form.invalid){
      return
    }
    this.profileDetails = form.value as User
    
    this.profileService.updateUserById(this.id,this.profileDetails).subscribe(() => {
      this.router.navigate([`/profile/${this.id}`]);
    });
  }
  goBack(){
    this.router.navigate([`/profile/${this.id}`])
  }
}

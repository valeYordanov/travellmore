import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NgForm } from '@angular/forms';
import { ProfileService } from 'src/app/services/services/profile.service';

import { UserService } from 'src/app/services/services/user.service';
import { User } from '../../types/user-type/authUser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  errorFound: any = null;

  constructor(
    private userService: UserService,
    private profileService: ProfileService,
    private router:Router
  ) {}
  signUp(form: NgForm) {
    if(form.invalid){
      return
    }
    console.log(form.value);

    const { email, username, password, country, tel } = form.value;

    this.userService
      .register(email, password)
      .then((data) => {
        const uid = data.user?.uid;
        if (uid) {
          this.profileService
            .storeUsers(email, username, country, tel, uid)
            .subscribe();
        }
        this.router.navigate(['/blogs'])
      })
      .catch((error) => {
        this.errorFound = this.userService.handleError(error);
      });
  }
}

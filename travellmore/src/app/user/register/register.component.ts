import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NgForm } from '@angular/forms';
import { ProfileService } from 'src/app/shared/services/profile.service';

import { UserService } from 'src/app/shared/services/user.service';
import { User } from '../user-type/authUser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  errorFound: any = null;

  constructor(
    private userService: UserService,
    private profileService: ProfileService
  ) {}
  signUp(form: NgForm) {
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
      })
      .catch((error) => {
        this.errorFound = this.userService.handleError(error);
      });
  }
}

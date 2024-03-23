import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  error : string = null || ''
  isLoading = false;
  constructor(private userService: UserService) {}
  signUp(form: NgForm) {
    this.isLoading = true
    const { email, password } = form.value;

    this.userService.register(email, password).subscribe((res) => {
      this.isLoading = false
      console.log(res);
    },errorRes => {
      switch(errorRes.error.error.message) {
        case "EMAIL_EXISTS" :
          this.error = 'An error occured!'
      }
    }),

    form.reset();
  }
}

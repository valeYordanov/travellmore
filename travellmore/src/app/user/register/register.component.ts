import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  errorFound: any = null;
  isLoading = false;
  constructor(private userService: UserService) {}
  signUp(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const { email, password } = form.value;
    this.isLoading = true;
    this.userService.register(email, password).subscribe({
      next: () => {
        this.isLoading = false;
      },
      error: (err) => {
        this.errorFound = err;
        this.isLoading = false;
      },
    });

    form.reset();
  }
}

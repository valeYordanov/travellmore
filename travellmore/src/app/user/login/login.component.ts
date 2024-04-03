import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  errorFound: any = null;
  isLoading = false;
  constructor(private userService: UserService,private router:Router) {}
  login(form: NgForm) {
    const { email, password } = form.value;
    
    this.userService
      .login(email, password)
      .then(() => {
        this.router.navigate(['/blogs'])
      })
      .catch((err) => {
        this.errorFound = this.userService.handleError(err);
        
      });
  }
}

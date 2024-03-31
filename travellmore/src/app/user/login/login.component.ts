import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
 errorFound:any = null
 isLoading = false
  constructor(private userService:UserService){}
  login(form: NgForm) {
    
    const { email, password } = form.value;
    this.isLoading= true
    this.userService.login(email,password)
  }
}

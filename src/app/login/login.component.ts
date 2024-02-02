import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public service: AuthService,private route:Router) { }

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if (localData != null) {
      this.service.signUpdata = JSON.parse(localData);
    }
  }

  onSubmit() {
    const isUserExist = this.service.signUpdata.find((m: any) =>
      m.userName == this.service.loginObj.userName && m.password == this.service.loginObj.password
    );
    if (isUserExist) {
      alert("Login Successful");
      this.route.navigate(['account'])
      this.service.accountVisible = true
      this.service.currenLoginUser = isUserExist;
    } else {
      alert("Wrong Credentials");
    }
  }
}

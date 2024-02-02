import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  signUpUsers:any[]=[];
  constructor(public service:AuthService){}
  onSubmit(){
    this.service.signUpObj.id = this.signUpUsers.length +1;
    this.signUpUsers.push(this.service.signUpObj);
    localStorage.setItem('signUpUsers',JSON.stringify(this.signUpUsers));
    this.service.signUpObj = {
      id:1,
      name:'',
      userName:'',
      email:'',
      password:''
    };
    this.service.signUpdata = this.signUpUsers;
    alert("registered succesfully")
  }
}

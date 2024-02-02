import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  allUsers:any[]=[];
  constructor(public service:AuthService , private route:Router){}
  ngOnInit():any
  {
    const localData = localStorage.getItem('signUpUsers');
    if (localData != null) {
      this.allUsers = JSON.parse(localData);
    }
    this.service.signUpObj = {
      id:1,
      name:'',
      userName:'',
      email:'',
      password:''
    };
  }

  logout(){
    this.service.accountVisible=false;
    this.route.navigate(['login'])
  }

  editUser(user:any){
    this.service.signUpObj = {
      id : user.id,
      name: user.name,
      userName: user.userName,
      email: user.email
     };
  }

  onUpdate(){
    debugger
    const record = this.allUsers.find((m:any)=>m.id == this.service.signUpObj.id);
    record.name = this.service.signUpObj.name;
    record.email = this.service.signUpObj.email;
    record.userName =this.service.signUpObj.userName;
    localStorage.setItem('signUpUsers',JSON.stringify(this.allUsers));
    alert("Sucessfully updated")
  }
}

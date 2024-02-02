import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'account_management';
  constructor(private service:AuthService,private route:Router){}

  onClick(){
    if(this.service.accountVisible == true){
      this.route.navigate(['account'])
    }
    else{
      alert("Login First")
      this.route.navigate(['login'])
    }
  }
}

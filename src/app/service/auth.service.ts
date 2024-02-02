import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  signUpdata:any [] = [];
  accountVisible:boolean = false;
  currenLoginUser:any;
  constructor() { }
  signUpObj:any = {
    id:'',
    name:'',
    userName:'',
    email:'',
    password:''
  };
  loginObj:any = {
    userName:'',
    password:''
  };
}

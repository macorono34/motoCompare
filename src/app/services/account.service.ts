import { Injectable } from '@angular/core';
import { User } from '../login/user';
import { AlertifyService } from './alertify.service';
import { Router } from '@angular/router';

@Injectable()
export class AccountService {

  constructor(private alertifyService:AlertifyService, private router:Router) { }
 loggenIn=false;
  login(user:User):boolean{
if(user.userName=="serdar"&&user.password=="12345"){
  this.loggenIn=true;
  localStorage.setItem("isLogged",user.userName);
  this.router.navigate(['products']);
  return true;
}

return false;
  }

  isLoggedIn(){
    return this.loggenIn;
  }
  logOut(){
    localStorage.removeItem("isLogged");
   this.loggenIn=false;
  }
}

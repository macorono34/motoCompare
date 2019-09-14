import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { FormGroup, NgForm } from '@angular/forms';
import { User } from './user';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private accountServise:AccountService, private alertifyService:AlertifyService) { }
  loginn:User=new User();

  
  ngOnInit() {
  }
  login(form: NgForm){
    this.accountServise.login(this.loginn);   
    if(this.accountServise.loggenIn===true){
      this.alertifyService.success("Giriş Yapıldı")
    }
    if(this.accountServise.loggenIn===false){
      this.alertifyService.error("Giriş Yapılamadı")
    }
  }

}

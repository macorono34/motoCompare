import { Component, OnInit } from '@angular/core';
import { DataserviceService } from './services/dataservice.service';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private data1:DataserviceService, private accountService:AccountService) { }
  title = 'shop';
  ngOnInit(){
    console.log(this.data1.getAllFavourites);
    
  }
  isLoggedin(){
    return this.accountService.isLoggedIn();
  }
  logOut(){
    this.accountService.logOut();
  }
}

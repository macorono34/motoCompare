import { Injectable, OnInit } from '@angular/core';
import data from './../data.json'

@Injectable({
  providedIn: 'root'
})
export class DataserviceService implements OnInit{

  constructor() { }
  ngOnInit(){
    console.log(data);
    
  }
  getAllFavourites(){
    console.log("a");
    console.log(data);
    
    return data;
  }
}

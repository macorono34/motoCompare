import { Injectable } from '@angular/core';
declare let alertify:any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  success(mesage:string){
    alertify.success(mesage)
  }
  error(mesage:string){
    alertify.error(mesage);
  }
  
}

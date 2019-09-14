import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Favori } from '../favori/favori';
import { tap, catchError } from 'rxjs/operators';
import { AlertifyService } from './alertify.service';


@Injectable()
export class FavoriService {

  constructor(private http:HttpClient,private alerty: AlertifyService) { }
  path="http://localhost:3000/Favori"

 getFavori(categoryId):Observable<Favori[]>{
  let newPath = this.path;
  if (categoryId) {
    newPath = newPath + "?categoryId=" + categoryId
  }
  return this.http
  .get<Favori[]>(newPath).pipe(
    tap(data => console.log(JSON.stringify(data))),
    catchError(this.handleError)
  );
 }
 addFavori(favori: Favori):Observable<Favori>{
  this.alerty.success("Favoriye Eklendi")
   return this.http.post<Favori>(this.path ,favori).pipe(
    tap(data => console.log(JSON.stringify(data))),
    catchError(this.handleError));
 }
 deleteFavori(favori:Favori):Observable<Favori>{
   return this.http.delete<Favori>(this.path+"/"+favori).pipe(
     tap(data=>console.log(JSON.stringify(data))),
     catchError(this.handleError));
 }
 handleError(err: HttpErrorResponse) {
  let errorMessage = ''
  if (err.error instanceof ErrorEvent) {
    errorMessage = 'Bir hata var' + err.error.message
  }
  else {
    errorMessage = 'Veri yok'
  }
  return throwError(errorMessage)
}
}

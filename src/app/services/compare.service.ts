import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Compare } from '../compare/compare';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class CompareService {

  constructor(private http:HttpClient) { }
  path="http://localhost:3000/Compare"

  getCompare(categoryId):Observable<Compare[]>{
    let newPath = this.path;
    if (categoryId) {
      newPath = newPath + "?categoryId=" + categoryId
    }
    return this.http.get<Compare[]>(newPath).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
      );
  }
  addCompare(compare:Compare):Observable<Compare>{
    return this.http.post<Compare>(this.path, compare).pipe(
      tap(data=> console.log(JSON.stringify(data))),
      catchError(this.handleError));
  }
  handleError(err: HttpErrorResponse) {
    let errorMessage = ''
    if (err.error instanceof ErrorEvent) {
      errorMessage = 'Bir hata var' + err.error.message
    }
    else {
      errorMessage = 'Siatemsel hata'
    }
    return throwError(errorMessage)
  }
}

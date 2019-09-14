import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Category } from '../category/category';
import { Observable, from, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators'
@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }
  path = "http://localhost:3000/categories"
  getCategories(): Observable<Category[]> {
    

    return this.http
      .get<Category[]>(this.path).pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }
  addCategory(category:Category): Observable<Category>{
    return this.http.post<Category>(this.path, category).pipe(
      tap(data => console.log(JSON.stringify(data))),
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

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Product } from '../product/product';
import { Observable, from, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable()
export class ProductService {

  constructor(private http: HttpClient, private router:Router) { }
flag:boolean;
  path = "http://localhost:3000/products"
  getProducts(categoryId): Observable<Product[]> {
    let newPath = this.path;
    if (categoryId) {
      newPath = newPath + "?categoryId=" + categoryId
    }

    return this.http
      .get<Product[]>(newPath).pipe(
        tap(data => console.log(data)),
        catchError(this.handleError)
      );

  }
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.path, product).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError));
  }
  
  deleteProduct(product: Product): Observable<Product> {
    return this.http.delete<Product>(this.path+"/"+product).pipe(
      tap(data=>console.log(JSON.stringify(data))) ,
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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { ProductAddFormsComponent } from './product/product-add-forms/product-add-forms.component';
import { CategoryAddFormsComponent } from './category/category-add-forms/category-add-forms.component';
import { FavoriComponent } from './favori/favori.component';
import { Favori2Component } from './favori2/favori2.component';
import { FavoriAddComponent } from './favori/favori-add/favori-add.component';
import { CompareComponent } from './compare/compare.component';
import { LoginComponent } from './login/login.component';
import { AccountService } from './services/account.service';
import { LogginGuard } from './login/loggin.guard';




@NgModule({
  declarations: [
    AppComponent,

    CategoryComponent,
    ProductComponent,
    ProductFilterPipe,
    ProductAddFormsComponent,
    CategoryAddFormsComponent,
    FavoriComponent,
    Favori2Component,
    FavoriAddComponent,
    CompareComponent,
    LoginComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [AccountService,LogginGuard],
  bootstrap: [AppComponent],
})
export class AppModule { }

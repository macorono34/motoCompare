import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductAddFormsComponent } from './product/product-add-forms/product-add-forms.component';
import { CategoryComponent } from './category/category.component';
import { CategoryAddFormsComponent } from './category/category-add-forms/category-add-forms.component';
import { FavoriComponent } from './favori/favori.component';
import { Favori2Component } from './favori2/favori2.component';
import { FavoriAddComponent } from './favori/favori-add/favori-add.component';
import { CompareComponent } from './compare/compare.component';
import { LoginComponent } from './login/login.component';
import { LogginGuard } from './login/loggin.guard';
const routes: Routes = [
  {path:'products', component:ProductComponent},
  {path:'product-add',component:ProductAddFormsComponent,canActivate:[LogginGuard]},
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'products/category/:categoryId',component:ProductComponent},
  {path: "category-add", component:CategoryAddFormsComponent},
  {path: "favori-page", component:FavoriComponent},
  {path: "favori", component:Favori2Component},
  {path :"favori-add", component:FavoriAddComponent},
  {path :"compare", component:CompareComponent},
  {path: "login", component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

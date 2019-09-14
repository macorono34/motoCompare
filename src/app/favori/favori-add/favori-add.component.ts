import { Component, OnInit } from '@angular/core';
import { Favori } from '../favori';
import { Category } from 'src/app/category/category';
import { CategoryService } from 'src/app/services/category.service';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/product/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { FavoriService } from 'src/app/services/favori.service';

@Component({
  selector: 'app-favori-add',
  templateUrl: './favori-add.component.html',
  styleUrls: ['./favori-add.component.css'],
  providers:[CategoryService,ProductService,FavoriService]
})
export class FavoriAddComponent implements OnInit {
  

  constructor(private categoryService:CategoryService,
    private activatedRoute:ActivatedRoute,
    private productService:ProductService,
    private favoriService:FavoriService) { }
model : Favori=new Favori();
categories:Category[];
products:Product[];
  ngOnInit() {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })
    this.activatedRoute.params.subscribe(params=>{
      this.productService.getProducts(params[""]).subscribe(data=>{
        this.products=data
      });
    })
  }
  add(form:NgForm){
this.favoriService.addFavori(this.model).subscribe()

  }

}

import { Component, OnInit } from '@angular/core';
import {  FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Product } from '../product';
import { Category } from 'src/app/category/category';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-product-add-forms',
  templateUrl: './product-add-forms.component.html',
  styleUrls: ['./product-add-forms.component.css'],
  providers:[CategoryService,ProductService]
  
})
export class ProductAddFormsComponent implements OnInit {
  

  constructor(private formBulilder:FormBuilder,
    private categoryService:CategoryService,
    private productService:ProductService,
    private alertifyService:AlertifyService) { }
  categories:Category[];

  productAddForm:FormGroup;

  product:Product=new Product();
 

  createproductAddForm(){
    this.productAddForm=this.formBulilder.group({
      name:["",Validators.required],
      description:["",Validators.required],
      imageUrl:["",Validators.required],
      price:["",Validators.required],
      categoryId:["",Validators.required],
    });
  }

  ngOnInit() {
    this.createproductAddForm();
    this.categoryService.getCategories().subscribe(data=>{
      this.categories=data;
    })
  }

  add(){
    if(this.productAddForm.valid){
this.product=Object.assign({},this.productAddForm.value)
    }
    this.productService.addProduct(this.product).subscribe(data=>{
      this.alertifyService.success(data.name + "Kaydedildi.")
    })
  }
 
}

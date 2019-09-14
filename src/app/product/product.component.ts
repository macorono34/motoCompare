import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service'
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Favori } from '../favori/favori';
import { FavoriService } from '../services/favori.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompareService } from '../services/compare.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService, FavoriService,CompareService]
})

export class ProductComponent implements OnInit {

  constructor(private alerty: AlertifyService,
    private productService:ProductService,
    private activatedRoute:ActivatedRoute,
    private favoriService:FavoriService,
    private formBulilder:FormBuilder,
    private router: Router,
    private compareService:CompareService
    ) { }
  filterText = "" 
  products: Product[];
  product:Product=new Product();
  newfavori:Favori=new Favori();
  favoriAddForm:FormGroup;

  createproductAddForm(){
this.favoriAddForm=this.formBulilder.group({
  name:["",Validators.required],
  description:["",Validators.required],
  imageUrl:["",Validators.required],
  price:["",Validators.required],
  categoryId:["",Validators.required],
});
  }
count:number=0;
  ngOnInit() {
    if(JSON.parse(localStorage.getItem("favorites")) != null){
      this.favorites = JSON.parse(localStorage.getItem("favorites"));
      console.log(this.favorites);
      this.count++;
    } 

this.activatedRoute.params.subscribe(params=>{
  this.productService.getProducts(params["categoryId"]).subscribe(data=>{
    this.products=data
  });
})

  }

  favorites = [];
  fav(item){
    console.log(item);  
    this.favoriService.addFavori(item).subscribe();
    //this.router.navigate(['/favori-page'], { queryParams: { order: "item" } });
  }
  compare(item, i){
    console.log(i+"vayy");
    this.compareService.addCompare(item).subscribe();
  }
  delete(item){
    console.log(item);
    this.productService.deleteProduct(item).subscribe();
   }
  add(){
    if(this.favoriAddForm.valid){
      this.newfavori=Object.assign({},this.favoriAddForm.value)
    }
    this.favoriService.addFavori(this.newfavori).subscribe()
  }
  addToFav(product) {
  this.alerty.success(product.name + " Eklendi")
  }
  

}


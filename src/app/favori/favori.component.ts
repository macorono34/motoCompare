import { Component, OnInit } from '@angular/core';
import { FavoriService } from '../services/favori.service';
import { Favori } from './favori';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-favori',
  templateUrl: './favori.component.html',
  styleUrls: ['./favori.component.css'],
  providers: [FavoriService]
})
export class FavoriComponent implements OnInit {
 

  constructor(private favoriservise: FavoriService
    
    ,private activatedRoute:ActivatedRoute,
    private favoriservice:FavoriService) { }
  favories: Favori[]
  filterText = ""
  favorites:any;
  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.favoriservise.getFavori(params["categoryId"]).subscribe(data=>{
        this.favories=data;
        console.log(data);
      });
    })
   
    this.favorites = JSON.parse(localStorage.getItem("favorites"));
    
  }
  delete(item){
    console.log(item);
    this.favoriservice.deleteFavori(item).subscribe();
   }

}

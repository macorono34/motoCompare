import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CategoryService } from '../services/category.service';
import { AlertifyService } from '../services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]

})
export class CategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService,
    private alertfyService: AlertifyService) { }
  title = "KATEGORİ listesi"
  categories: Category[]

  ngOnInit() {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })

  }

}

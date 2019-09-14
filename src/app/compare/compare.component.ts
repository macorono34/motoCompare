import { Component, OnInit } from '@angular/core';
import { CompareService } from '../services/compare.service';
import { ActivatedRoute } from '@angular/router';
import { Compare } from './compare';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css'],
  providers:[CompareService]
})
export class CompareComponent implements OnInit {

  constructor(private compareService: CompareService,private activatedRoute:ActivatedRoute) { }
compare:Compare[]

  ngOnInit() {
 this.activatedRoute.params.subscribe(params=>{
  this.compareService.getCompare(params["categoryId"]).subscribe(data=>{
    this.compare=data
  });
  })

}
}

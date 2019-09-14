import { Component, OnInit } from '@angular/core';
import { NEWFAVORİ } from '../dataOfFavori';
import { newfavori } from '../newfavori';

@Component({
  selector: 'app-favori2',
  templateUrl: './favori2.component.html',
  styleUrls: ['./favori2.component.css']
})
export class Favori2Component implements OnInit {
  newfavori=NEWFAVORİ;
  selectFavori:newfavori;

  constructor() { }

  ngOnInit() {
  }
  onSelect(newfavori:newfavori){
    this.selectFavori=newfavori;
  }

}

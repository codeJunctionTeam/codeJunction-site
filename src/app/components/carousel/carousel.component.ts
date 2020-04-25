import { Component, OnInit } from '@angular/core';
import teamImages from '../../../assets/json/teamCarousel.json';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  teamCarousel: any = teamImages;

}

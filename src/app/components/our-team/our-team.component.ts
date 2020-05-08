import { Component, OnInit } from '@angular/core';
import teamImages from '../../../assets/json/teamCarousel.json';

@Component({
  selector: 'app-carousel',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  teamCarousel: any = teamImages;

}

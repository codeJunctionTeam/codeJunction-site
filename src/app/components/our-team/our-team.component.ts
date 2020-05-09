import { Component, OnInit } from '@angular/core';
import teamImages from '../../../assets/json/teamCarousel.json';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent implements OnInit {

  teamCarousel: any = teamImages;

  constructor() { }

  ngOnInit(): void {
  }

}

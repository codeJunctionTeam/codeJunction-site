import { Component, OnInit } from '@angular/core';
import teamMembers from '../../../assets/json/team.json';

@Component({
    selector: 'app-typography',
    templateUrl: './teamSection.component.html',
    styleUrls: ['./teamSection.component.scss']
})
export class TeamSectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

      teamMembers: any = teamMembers;
}

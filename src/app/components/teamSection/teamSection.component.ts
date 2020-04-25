import { Component, OnInit } from '@angular/core';
import teamMembers from '../../../assets/json/team.json';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MemberCardComponent } from '../member-card/member-card.component';

@Component({
    selector: 'team-members',
    templateUrl: './teamSection.component.html',
    styleUrls: ['./teamSection.component.scss']
})
export class TeamSectionComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {}

  showMemberCard(index) {
      const card = new MemberCardComponent(this.modalService);
      card.open(teamMembers[index]["fullName"],teamMembers[index]["image"],teamMembers[index]["description"],teamMembers[index]["social"]);
  }

      teamMembers: any = teamMembers;
}

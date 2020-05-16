import { Component, OnInit, HostListener } from '@angular/core';
import projects from '../../../assets/json/projects.json';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectCardComponent } from '../project-card/project-card.component';


@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.scss']
})
export class OurWorkComponent implements OnInit {

  projects: any = projects;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  showProjectCard(data) {
    const card = new ProjectCardComponent(this.modalService);
    card.open(data);
  }

  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "nextArrow": "<div class='btn btn-danger btn-just-icon fa fa-angle-right'></div>",
    "prevArrow": "<div class='btn btn-danger btn-just-icon fa fa-angle-left'></div>",
    "autoplay": true,
    "autoplaySpeed": 2000,
    "adaptiveHeight": true,
    "dots": true,
    "infinite": true
  };

}

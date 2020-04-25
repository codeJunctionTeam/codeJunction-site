import { Component, OnInit, HostListener } from '@angular/core';
import projects from '../../../assets/json/projects.json';


@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.scss']
})
export class OurWorkComponent implements OnInit {

  private displayCount;
  public listedProjects;
  private clicker = 0;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.adjustScreen(event.target.innerWidth);
  }

  ngOnInit() {
    this.adjustScreen(window.innerWidth);
  }

  foward() {
    if (this.clicker < projects.length - this.displayCount) {
      this.clicker++;
      this.listedProjects = projects.slice(0 + this.clicker, this.displayCount + this.clicker);
    }
  }

  backward() {
    if (this.clicker > 0) {
      this.clicker--;
      this.listedProjects = projects.slice(0 + this.clicker, this.displayCount + this.clicker);
    }
  }

  adjustScreen(width) {
    if (width < 750) {
      this.displayCount = 1;
    } else if (width < 800) {
      this.displayCount = 2;
    }
    else if (width < 1300) {
      this.displayCount = 2;
    }else if (width < 1700) {
      this.displayCount = 3;
    }else{
      this.displayCount = 4;
    }
    this.listedProjects = projects.slice(0, this.displayCount);
  }
}

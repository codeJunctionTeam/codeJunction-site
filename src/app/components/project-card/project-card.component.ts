import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgbModal, NgbActiveModal, } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})

@Component({
  selector: 'project-card-component',
  templateUrl: './project-card.component.html'
})

export class ProjectCardComponent implements OnInit {
  public data;
  private activeModal: NgbActiveModal;
  constructor(private modalService: NgbModal) {

  }

  ngOnInit() { }


  open(data) {
    const modalRef = this.modalService.open(ProjectCardComponent);
    modalRef.componentInstance.data = data;
    modalRef.componentInstance.activeModal = modalRef;
  }

  close() {
    this.activeModal.close();
  }
}

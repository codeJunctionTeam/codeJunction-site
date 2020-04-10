import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, NgbActiveModal,} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-member-card',
  template: 
`<div class="member-modal">
    <div class="modal-header no-border-header">
      <h5 class="modal-title text-center">&nbsp;</h5>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <img src="assets/img/faces/{{image}}" class="rounded-circle img-center img-fluid profile-pic">
      <h5 class="modal-title text-center">{{fullName}}</h5>
      <div class="member-description">{{description}}</div>
      <div class="connected">Get Connected</div>
      <div class="row justify-content-center social-media-links">
        <div class="col-xs-4 social-link">
          <a rel="tooltip" title="Facebook" data-placement="bottom" href="{{facebook}}" target="_blank">
            <i class="fa fa-facebook"></i>
          </a>
        </div>
        <div class="col-xs-4 social-link">
          <a rel="tooltip" title="Instagram" data-placement="bottom" href="{{instagram}}" target="_blank">
            <i class="fa fa-instagram"></i>
          </a>
        </div>
        <div class="col-xs-4 social-link">
          <a rel="tooltip" title="LinkedIn" data-placement="bottom" href="{{linkedin}}" target="_blank">
            <i class="fa fa-linkedin-square"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="modal-footer no-border-footer">
      <div class="member-close mx-auto">
        <button type="button" class="btn btn btn-outline-primary btn-round" (click)="activeModal.close('Close click')">Close</button>
      </div>
    </div>
  </div>`,
  styleUrls: ['./member-card.component.css']
})

export class MemberCardContent {
  @Input() name;

  public fullName;
  public image;
  public description;
  public linkedin;
  public facebook;
  public instagram;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'member-card-component',
  templateUrl: './member-card.component.html'
})

export class MemberCardComponent implements OnInit {

  closeResult = '';

  constructor(private modalService: NgbModal) { }

  ngOnInit() {}

  open(fullName,image,description,social) {
    const modalRef = this.modalService.open(MemberCardContent);
    modalRef.componentInstance.fullName = fullName;
    modalRef.componentInstance.image = image;
    modalRef.componentInstance.description = description;
    modalRef.componentInstance.linkedin = social["linkedin"];
    modalRef.componentInstance.facebook = social["facebook"];
    modalRef.componentInstance.instagram = social["instagram"];
}

}

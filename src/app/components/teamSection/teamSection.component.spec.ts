import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamSectionComponent } from './teamSection.component';

describe('TeamSectionComponent', () => {
  let component: TeamSectionComponent;
  let fixture: ComponentFixture<TeamSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

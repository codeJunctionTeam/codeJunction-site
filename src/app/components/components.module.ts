import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';


import { TeamSectionComponent } from './teamSection/teamSection.component';
import { ComponentsComponent } from './components.component';
import { NgbdModalComponent } from './modal/modal.component';
import { NgbdModalContent } from './modal/modal.component';
import { MemberCardComponent } from './member-card/member-card.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { TechBlogComponent } from './tech-blog/tech-blog.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module
    ],
    declarations: [
        ComponentsComponent,
        TeamSectionComponent,
        NgbdModalComponent,
        NgbdModalContent,
        MemberCardComponent,
        OurWorkComponent,
        ProjectCardComponent,
        OurTeamComponent,
        TechBlogComponent
    ],
    entryComponents: [NgbdModalContent],
    exports: [ComponentsComponent]
})
export class ComponentsModule { }

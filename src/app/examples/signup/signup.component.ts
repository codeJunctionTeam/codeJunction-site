/*
import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/thirdParty/youtube.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test: Date = new Date();
    focus;
    focus1;
    constructor(
        private youtubeService: YoutubeService
    ) { }

    ngOnInit() { }

    displayYoutubePlaylist() {
        this.youtubeService.getPlaylist(356).subscribe(result => {
            console.log(result);
        }, (error) => {
            console.error(error);
        });
    }
}
*/

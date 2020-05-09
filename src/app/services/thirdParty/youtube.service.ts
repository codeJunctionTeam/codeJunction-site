import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtubeServiceURL = 'urlOfTheService';

  constructor(
    private httpClient: HttpClient
  ) { }

  postAPIcall(path: any, params: any): Observable<any> {
    return this.httpClient.post(`${this.youtubeServiceURL}${path}`, params);
  }

  getAPIcall(params: any): Observable<any> {
    return this.httpClient.get(`${this.youtubeServiceURL}${params}`);
  }

  getPlaylist(playlistId) {
    return this.getAPIcall(`getPlaylist?Id=${playlistId}`);
  }

}

import { Http, Response } from '@angular/http';
//import { MediaService } from './media.service';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class MediaService {
  constructor(private http: Http) { }

  getAllMedia() {
    //return this.http.get('http://media.mw.metropolia.fi/wbma/media/').map( (res) => { return res.json(); });
    return this.http.get('http://media.mw.metropolia.fi/wbma/media/')
  }
}

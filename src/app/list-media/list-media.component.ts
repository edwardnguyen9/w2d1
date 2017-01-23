import { DigitransitService } from './../services/digitransit.service';
import { Response } from '@angular/http';
import { MediaService } from './../services/media.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list-media',
  templateUrl: './list-media.component.html',
  styleUrls: ['./list-media.component.css']
})
export class ListMediaComponent implements OnInit {
  private images: any = [];
  private routes1: any = [];
  private routes2: any = [];
  private routes: any = [];
  constructor(private mediaService: MediaService, private digitransitService: DigitransitService) { }

  ngOnInit() {
    this.mediaService.getAllMedia().subscribe(
      (res) => {
      this.images = res.json();
      console.log(this.images);
    });
    this.digitransitService.getData('Gransinmäki').subscribe(
      (res) => {
        this.routes1 = res.data.stops[0].patterns;
        this.routes2 = res.data.stops[1].patterns;
        this.routes = this.routes1.concat(this.routes2);
        console.log(this.routes1);
      }
    );
  }
}

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
  constructor(private mediaService: MediaService) { }

  ngOnInit() {
    this.mediaService.getAllMedia().subscribe(
      (res) => {
      this.images = res.json();
      console.log(this.images);
    });
  }
}

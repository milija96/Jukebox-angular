import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { SongsService } from '../songs.service';
import { PaginationService } from '../pagination.service';
@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  songs = [];
  page = 4;
  constructor(private songsService: SongsService,
              private pageService: PaginationService) { }

  ngOnInit() {
    this.songsService.getMusic()
    .subscribe(
      (data: any[]) => this.songs = data,
    );
  }
  pages(){
    this.pageService.getPageNumber();
    console.log("www")
  }
}

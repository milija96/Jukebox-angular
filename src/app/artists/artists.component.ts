import { Component, OnInit } from '@angular/core';
import { SongsService } from '../songs.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  names = [];
  constructor(private songsService: SongsService) { }

  ngOnInit() {
    this.songsService.getArtists()
    .subscribe(
      (data: any[]) => this.names = data,
    );
  }

}

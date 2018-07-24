import { Component, OnInit } from '@angular/core';
import { SongsService } from '../.././songs.service';
import { Songs } from './popular-songs.model'


@Component({
  selector: 'app-popular-songs',
  templateUrl: './popular-songs.component.html',
  styleUrls: ['./popular-songs.component.css'],
  providers: [SongsService],

})
export class PopularSongsComponent implements OnInit {

  songs = [];

  constructor(public songsService: SongsService) { }

  ngOnInit() {
    this.songsService.getTrendingSongs()
    .subscribe(
      (songs: any[]) =>  this.songs = songs,
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SongsService } from '../../songs.service';

@Component({
  selector: 'app-ganre-music',
  templateUrl: './ganre-music.component.html',
  styleUrls: ['./ganre-music.component.css']
})
export class GanreMusicComponent implements OnInit {
  songs = [];
  id: number;
  constructor(private route: ActivatedRoute,
              private songsService: SongsService) { }
  changeMusic(){
    this.songsService.getGanreMusic(this.id)
    .subscribe(
      (data: any[]) => this.songs = data,
    );
  }
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.changeMusic()
      }
    );
    this.changeMusic();
  }

}

import { Component, OnInit } from '@angular/core';
import { SongsService } from '../songs.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ganres',
  templateUrl: './ganres.component.html',
  styleUrls: ['./ganres.component.css']
})
export class GanresComponent implements OnInit {
  ganres = [];
  constructor(private songsService: SongsService,
              private router: Router, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.songsService.getGanres()
    .subscribe(
      (data: any[]) => this.ganres = data,
    );
  }
  idOfGanre(id: number){
    this.router.navigate(['/ganre', id], {relativeTo: this.route});
  }
}

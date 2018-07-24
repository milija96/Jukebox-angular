import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ArtistsComponent } from './artists/artists.component';
import { GanresComponent } from './ganres/ganres.component';
import { MusicComponent } from './music/music.component';
import { PlayerComponent } from './player/player.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecomendedComponent } from './home/recomended/recomended.component';
import { PopularArtistsComponent } from './home/popular-artists/popular-artists.component';
import { PopularSongsComponent } from './home/popular-songs/popular-songs.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CarouselService } from './carousel/carousel.service';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { Routes, RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { AppRoutingModel } from './app-routing.module';
import { ArtistSongsComponent } from './artists/artist-songs/arist-songs.component';
import { SongsService } from './songs.service';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AcountComponent } from './acount/acount.component';
import { GanreMusicComponent } from './ganres/ganre-music/ganre-music.component';
import { PaginationService } from './pagination.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ArtistsComponent,
    GanresComponent,
    MusicComponent,
    PlayerComponent,
    CarouselComponent,
    RecomendedComponent,
    PopularArtistsComponent,
    PopularSongsComponent,
    ArtistSongsComponent,
    SideNavComponent,
    AcountComponent,
    GanreMusicComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule,
    CarouselModule.forRoot(),
    AppRoutingModel,
    HttpModule,

    
  ],
  providers: [CarouselService, SongsService, PaginationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from "@angular/core";
import { HomeComponent } from './home/home.component';
import { ArtistsComponent } from './artists/artists.component';
import { GanresComponent } from './ganres/ganres.component';
import { MusicComponent } from './music/music.component';
import { Routes, RouterModule } from '@angular/router';
import { ArtistSongs } from "./artists/artist-songs/artist-songs.module";
import { GanreMusicComponent } from "./ganres/ganre-music/ganre-music.component";

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'music', component: MusicComponent},
    {path: 'ganre', component: GanresComponent, children :[
        {path: ':id', component: GanreMusicComponent}
    ]},
    {path: 'artists', component: ArtistsComponent, children:[
        { path: 'something', component: ArtistSongs}
    ]}
  ]; 
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModel{

}
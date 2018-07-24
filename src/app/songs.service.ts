import { Http, Response  } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';

@Injectable()
export class SongsService{
    constructor(private http: Http){}
    getTrendingSongs(){
        return this.http.get('http://192.168.0.58:8080/JukeboxWebService/webapi/prometi/top5songs')
        .map(
            (response: Response) => {
                const songs = response.json();
                return songs;
            }
        );
    }
    getArtists(){
        return this.http.get("http://192.168.0.58:8080/JukeboxWebService/webapi/izvodjaci")
        .map(
            (response: Response) => {
                const data = response.json();
                return data;
            }
        );
    }
    getGanres(){
        return this.http.get("http://192.168.0.58:8080/JukeboxWebService/webapi/zanrovi")
        .map(
            (response: Response) => {
                const data = response.json();
                return data;
            }
        );
    }
    getMusic(){
        return this.http.get("http://192.168.0.58:8080/JukeboxWebService/webapi/pesme")
        .map(
            (response: Response) => {
                const data = response.json();
                return data;
            }
        );
    }
    getGanreMusic(id: number){
        return this.http.get("http://192.168.0.58:8080/JukeboxWebService/webapi/zanrovi/"+ id +"/pesme")
        .map(
            (response: Response) => {
                const data = response.json();
                console.log(data)
                return data;
            }
        );
    }
}
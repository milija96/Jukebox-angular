import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';
@Injectable()
export class PaginationService{
    page: number;
    constructor(private http: Http){}
    getPageNumber(){
        this.page = 1;
        return this.http.get('http://192.168.0.58:8080/JukeboxWebService/webapi/pesme/pagination/' + this.page)
        .map(
            (response: Response) => {
                const data = response.json()
                console.log("w");
                return data;
            }
        );
    }

}
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
    providedIn: 'root'
})

export class GifsService {
    public gifsList: Gif[] = []
    private _tagsHistory: string[] = [];
    private apiKey: string = "AGFW1ZSBG2J07Lhd9mQGEyUSLhmWciKw";
    baseUrl: string = "https://api.giphy.com/v1/gifs";

    constructor(private http: HttpClient) {
        this.loadLocalStorage();
    }

    get tagsHistory() {
        return [...this._tagsHistory]
    }

    private saveLocalStorage(): void {
        localStorage.setItem("history", JSON.stringify(this._tagsHistory));
    }

    private loadLocalStorage(): void {
        const itemStorage = localStorage.getItem("history");
        if(!itemStorage) return ;

        this._tagsHistory = JSON.parse(itemStorage);

        if(this._tagsHistory.length === 0) return;
        this.searchTag(this._tagsHistory[0]);

    }

    private organizeHistory(tag: string) {
        tag = tag.toLowerCase();

        if(this._tagsHistory.includes(tag)){
            this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag)
        }

        this._tagsHistory.unshift(tag);
        this._tagsHistory = this._tagsHistory.splice(0, 10);
        this.saveLocalStorage();
    }

    
    searchTag(tag: string): void {
        const params = new HttpParams()
        .set("api_key", this.apiKey)
        .set("limit", "10")
        .set("q", tag)

        if(tag.length === 0) return ;
        this.organizeHistory(tag);

        this.http.get<SearchResponse>(`${this.baseUrl}/search`, {params})
        .pipe(
            map(item => item.data),
            take(3),
        )
        .subscribe((resp) => {
            this.gifsList = resp
        } )
    }

} 
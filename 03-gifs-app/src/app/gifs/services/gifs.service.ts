import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGyphyResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  public gifList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private apikey: string = "5uLcVMCv0Di8ER4yoLPmoBdzS8WV2ske";
  private servicesUrl: string = "https://api.giphy.com/v1/gifs"

  constructor(private http: HttpClient) { }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter(oldTag => oldTag.toLowerCase() !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.splice(0, 10);
  }

  private saveLocalStorage(): void {
    sessionStorage.setItem("history", JSON.stringify(this.tagsHistory));
  }

  async searchTag(tag: string): Promise<void> {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set("api_key", this.apikey)
      .set("limit", 10)
      .set("q", tag);

    this.http.get<SearchGyphyResponse>(`${this.servicesUrl}/search`, { params })
      .subscribe(resp => {
        this.gifList = resp.data;
        this.saveLocalStorage();
      });
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private apiKey = 'AIzaSyBcooOo0Ow2K-d5Gc_VzXt_3l4nLzs7PcI';
  private apiUrl = 'https://www.googleapis.com/youtube/v3';

  constructor(private http: HttpClient) { }

  getVideos(): Observable<any> {
    const url = `${this.apiUrl}/search?key=${this.apiKey}&part=snippet&type=video&q=QUERY`;
    return this.http.get(url);
  }
}
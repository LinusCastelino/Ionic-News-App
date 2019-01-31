import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  currentArticle: any;

  constructor(private httpClient: HttpClient) { }

  public getNews(query : string){
    return this.httpClient.get(API_URL+query+'&apiKey='+API_KEY);
  }
}

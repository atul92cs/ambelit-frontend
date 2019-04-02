import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserAds} from '../models/Ads.model';
@Injectable({
  providedIn: 'root'
})
export class AdsService {
  readonly apiUrl='http://localhost:8080/ad/ads/';
  constructor(private http:HttpClient) { }
  getUserAds(id:number)
  {
    return this.http.get<UserAds[]>(this.apiUrl+id);
  }
}

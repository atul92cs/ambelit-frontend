import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from '../models/Category.model';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
 readonly apiUrl='http://localhost:8080/category/';
  constructor(private http:HttpClient) { }
  getCategory()
  {
    return this.http.get<Category[]>(this.apiUrl);
  }
}

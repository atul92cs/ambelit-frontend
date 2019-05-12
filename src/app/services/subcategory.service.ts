import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subcategory} from '../models/Subcategory.model';
@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {
   readonly apiUrl="http://localhost:8080/subcategory/";
  constructor(private http:HttpClient) { }

  getSubcategory()
  {
    return this.http.get<Subcategory[]>(this.apiUrl);
  }
  getsubcategory(id:number)
  {
    return this.http.get<Subcategory[]>(this.apiUrl+id);
  }
}

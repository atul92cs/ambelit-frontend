import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  readonly apiUrl='http://localhost:8080/skill';
  constructor(private http:HttpClient) { }

  addskills(id,skill)
  {
    const skillData={
      id:id,
      skill:skill
    }
    return this.http.post<any>(this.apiUrl+'/add',skillData);
  }
}

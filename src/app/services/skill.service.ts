import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Skills} from '../models/Skills.model';
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
  getSkill(id:number)
  {
    const skillData={
      id:id
    }
    return this.http.get<Skills[]>(this.apiUrl+'/'+id);
  }
  getuserSkill(id:string)
  {
    return this.http.get<any>(this.apiUrl+'/user/'+id);
  }
  updateSkill(id:string,skill:string)
  {
    const skillData={
      skill:skill
    }
    return this.http.put<any>(this.apiUrl+'/'+id,skillData);
  }
  deleteSkill(id:string)
  {
    return this.http.delete<any>(this.apiUrl+'/'+id);
  }
}

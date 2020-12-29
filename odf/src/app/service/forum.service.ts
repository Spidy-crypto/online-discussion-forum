import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Forum } from '../models/forum';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private httpClient:HttpClient) { }

  public ip : String = "http://localhost:3000/";
  public urls = {
    create: this.ip + 'forums/create',
    get: this.ip + 'forums/',
    already: this.ip + 'forums/already'
  }

  public create(data): Observable<Forum> {
    return this.httpClient.post<Forum>(this.urls.create, data);
  }

  public get(email): Observable<Forum>{
    return this.httpClient.get<Forum>(this.urls.get + 'findbyemail/' + email);
  }

  public forumname(_id): Observable<Forum>{
    return this.httpClient.get<Forum>(this.urls.get + _id);
  }

  public already(data): Observable<Forum>{
    return this.httpClient.post<Forum>(this.urls.already,data);
  }  

  public delete(id){
     return this.httpClient.delete(this.urls.get+ 'delete/' +id);
  }  

  public deletefromForum(data){
    console.log(data);
    return this.httpClient.post(this.urls.get + 'deletefromforum/',data);
  }

}

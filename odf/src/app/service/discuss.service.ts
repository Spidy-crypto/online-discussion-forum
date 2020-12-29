import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Discuss } from '../models/discuss';

@Injectable({
  providedIn: 'root'
})
export class DiscussService {

  public ip : String = "http://localhost:3000/";
  public urls = {
    get: this.ip + 'discuss/',
    create: this.ip + 'discuss/create'
  }

  constructor(private httpClient:HttpClient) {  }

  public get(_id): Observable<Discuss>{
    return this.httpClient.get<Discuss>(this.urls.get+_id);
  }

  public create(data): Observable<Discuss>{
    return this.httpClient.post<Discuss>(this.urls.create,data);
  }

}

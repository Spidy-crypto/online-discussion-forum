import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Owner } from '../models/owner'

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public ip : String = "http://localhost:3000/";
  public urls = {
    get : this.ip + 'owners/',
    create: this.ip + 'owners/owner'
  }
  constructor(private httpClient:HttpClient) { }

  public get(): Observable<Owner>{
    return this.httpClient.get<Owner>(this.urls.get);
  }

  public post(data): Observable<Owner>{
    return this.httpClient.post<Owner>(this.urls.create,data);
  } 

}

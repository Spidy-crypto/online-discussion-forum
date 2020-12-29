import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isloggedin = new Subject();

  public ip : String = "http://localhost:3000/";
  public urls = {
    create: this.ip + 'users/create',
    get: this.ip + 'users/',
    login: this.ip + 'users/login',
    mail: this.ip + 'users/mail'
  };
  constructor(private httpClient:HttpClient) { 
  }

  public get(email): Observable<User> {
    return this.httpClient.get<User>(this.urls.get+'find/'+email);
  }

  public login(data): Observable<User>{
    return this.httpClient.post<User>(this.urls.login,data);
  }

  public create(data): Observable<User> {
    return this.httpClient.post<User>(this.urls.create, data);
  }

  public returnAll(): Observable<User> {
    return this.httpClient.get<User>(this.urls.get);
  }

  public sendmail(data){
    return this.httpClient.post(this.urls.mail,data);
  }

}

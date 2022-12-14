import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

const AUTH_API: string = 'http://localhost:8080/api/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  login(user: User): Observable<any> {
    return this.http.post(`${AUTH_API}/signin`, {
      username: user.email,
      password: user.password
    }, { headers: this.headers });
  }

  register(user: any): Observable<any> {
    return this.http.post(`${AUTH_API}/signup`, {
      name: user.name,
      email: user.email,
      password: user.password
    }, { headers: this.headers });
  }

}

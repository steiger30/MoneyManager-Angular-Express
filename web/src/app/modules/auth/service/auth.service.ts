import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, first } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface Params {
  email: string,
  password: string
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly BASE_URL = environment.apiUrl;
  API?: string
  constructor(private http: HttpClient) { }
  
  login(record: Partial<Params>, endpoint: string): Observable<any> {
    this.API = this.BASE_URL + endpoint
    return this.http.post<any>(this.API, record).pipe(first())
  }

  create(record: Partial<Params>, endpoint: string): Observable<any> {
    this.API = this.BASE_URL + endpoint
    return this.http.post<any>(this.API, record).pipe(first())
  }
}

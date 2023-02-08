import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, first } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface Params {
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly BASE_URL = environment.apiUrl;
  private readonly API = 'http://localhost:3000/users/auth';

  constructor(private http: HttpClient) { }

  get(record: Params): Observable<any> {
    return this.http.get<any>(this.API).pipe(first())
  }
}

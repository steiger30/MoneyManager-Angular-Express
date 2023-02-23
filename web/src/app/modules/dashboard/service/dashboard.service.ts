import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, first } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Finance } from '../interfaces/finance';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private readonly BASE_URL = environment.apiUrl;
  private readonly API = 'http://localhost:3000/finance';

  constructor(private http: HttpClient) {}

  post(record: Finance, endpoint: string): Observable<any> {
    return this.http.post<any>(this.API, record).pipe(first());
  }
  get(): Observable<any> {
    return this.http.get<any>(this.API).pipe(first());
  }
  delete(record: Finance): Observable<any> {
    const options = { body: record };
    return this.http.delete<any>(this.API, options);
  }
}

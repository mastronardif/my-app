
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroesUrl: string = "https://random-data-api.com/api/invoice/random_invoice";

  constructor(private http: HttpClient) { }

  getHeroes(id: string): Observable <any[]> {
    id = id ? id : '';
    return this.http.get<any[]>(this.heroesUrl);
  }
}

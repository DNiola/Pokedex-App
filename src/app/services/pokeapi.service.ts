// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class PokeapiService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  private baseUrl: string = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) {}

  getPokemonList(limit: number, offset: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}pokemon?limit=${limit}&offset=${offset}`);
  }

  getPokemonDetails(name: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}pokemon/${name}`);
  }
}

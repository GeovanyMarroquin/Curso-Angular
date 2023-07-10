import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Region } from '../interfaces/region.type';



@Injectable({ providedIn: 'root' })
export class CountriesService {

  private apiUrl: string = "https://restcountries.com/v3.1";
  public cacheStore: CacheStore = {
    byCapital: { term: "", countries: [] },
    byCountries: { term: "", countries: [] },
    byRegion: { region: "", countries: [] },
  };

  constructor(private http: HttpClient) {
    this.loadFromSessionStorage();
  }


  private saveToSessionStorage(): void {
    sessionStorage.setItem("cacheStorage", JSON.stringify(this.cacheStore));
  }

  private loadFromSessionStorage() {
    if (!sessionStorage.getItem("cacheStorage")) return;

    this.cacheStore = JSON.parse(sessionStorage.getItem("cacheStorage")!);
  }


  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(err => of([]))
      );
  }

  public searchCountryByAlphaCode(code: string): Observable<Country | null> {
    const url: string = `${this.apiUrl}/alpha/${code}`;
    return this.http.get<Country[]>(url)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(err => of(null))
      );
  }

  public searchCapital(term: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/capital/${term}`;
    return this.getCountriesRequest(url)
      .pipe(
        tap(countries => this.cacheStore.byCapital = { countries, term }),
        tap(() => this.saveToSessionStorage())
      );
  }

  public searchCountry(term: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/name/${term}`;
    return this.getCountriesRequest(url)
      .pipe(
        tap(countries => this.cacheStore.byCountries = { countries, term }),
        tap(() => this.saveToSessionStorage())
      );
  }

  public searchRegion(region: Region): Observable<Country[]> {
    const url: string = `${this.apiUrl}/region/${region}`;
    return this.getCountriesRequest(url)
      .pipe(
        tap(countries => this.cacheStore.byRegion = { countries, region }),
        tap(() => this.saveToSessionStorage())
      );
  }
}

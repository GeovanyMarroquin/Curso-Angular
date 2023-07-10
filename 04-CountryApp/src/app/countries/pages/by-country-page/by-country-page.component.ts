import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/country.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initalValue: string = "";

  constructor(private countryService: CountriesService) { }

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCountries.countries;
    this.initalValue = this.countryService.cacheStore.byCountries.term;
  }

  public searchByCountry(term: string): void {
    this.isLoading = true;
    this.countryService.searchCountry(term).subscribe(resp => {
      this.countries = resp;
      this.isLoading = false;
    });
  }
}

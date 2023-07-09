import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/country.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  constructor(private countryService: CountriesService) { }

  public searchByCountry(term: string): void {
    this.isLoading = true;
    this.countryService.searchCountry(term).subscribe(resp => {
      this.countries = resp;
      this.isLoading = false;
    });
  }
}

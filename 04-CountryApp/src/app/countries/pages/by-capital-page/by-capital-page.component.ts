import { Country } from '../../interfaces/country.interface';
import { CountriesService } from './../../services/country.service';
import { Component } from '@angular/core';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];
  constructor(private countryService: CountriesService) { }

  public searchByCapital(term: string): void {
    this.countryService.searchCapital(term).subscribe(resp => {
      this.countries = resp;
    });
  }

}

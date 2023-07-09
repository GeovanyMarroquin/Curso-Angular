import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/country.service';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  constructor(private countryService: CountriesService) { }

  public searchByRegion(term: string): void {
    this.isLoading = true;
    this.countryService.searchRegion(term).subscribe(resp => {
      this.countries = resp;
      this.isLoading = false;
    });
  }
}

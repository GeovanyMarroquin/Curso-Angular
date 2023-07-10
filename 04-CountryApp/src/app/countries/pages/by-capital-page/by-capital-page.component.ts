import { Country } from '../../interfaces/country.interface';
import { CountriesService } from './../../services/country.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit{

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = "pene";
  constructor(private countryService: CountriesService) { }

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCapital.countries;
    this.initialValue = this.countryService.cacheStore.byCapital.term;
  }

  public searchByCapital(term: string): void {
    this.isLoading = true;
    this.countryService.searchCapital(term).subscribe(resp => {
      this.countries = resp;
      this.isLoading = false;
    });
  }

}

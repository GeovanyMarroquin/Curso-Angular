import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/country.service';
import { Region } from '../../interfaces/region.type';



@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit {
  public countries: Country[] = [];
  public isLoading: boolean = false;

  public continents: Region[] = ["Asia", "Africa", "Americas", "Oceania", "Europe"];
  public selectedRegion?: Region;


  constructor(private countryService: CountriesService) { }

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countryService.cacheStore.byRegion.region;
  }

  public searchByRegion(term: Region): void {
    this.isLoading = true;
    this.selectedRegion = term;
    this.countryService.searchRegion(term).subscribe(resp => {
      this.countries = resp;
      this.isLoading = false;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/country.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  public country?: Country;


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countryService: CountriesService,
  ) { }

  public ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countryService.searchCountryByAlphaCode(id))
      )
      .subscribe(country => {
        if (!country) return this.router.navigateByUrl("/");
        return this.country = country;
      })
  }

}

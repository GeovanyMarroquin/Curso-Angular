import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
    ``
  ]
})
export class MenuComponent implements OnInit {

  public menuItems: MenuItem[] = [];

  ngOnInit(): void {
    this.menuItems = [
      {
        label: "Pipes de Angular",
        icon: PrimeIcons.DESKTOP,
        items: [
          {
            label: "Textos y fechas",
            icon: PrimeIcons.ALIGN_LEFT
          },
          {
            label: "Numeros",
            icon: PrimeIcons.DOLLAR
          },
          {
            label: "No comunes",
            icon: PrimeIcons.GLOBE
          }
        ]
      },
      {
        label: "Pipes personalizados",
        icon: PrimeIcons.COG,
        items: [
          {
            label: "Otro elemento",
            icon: PrimeIcons.COG,
            items: [
              {
                label: "Otro elemento",
                icon: PrimeIcons.COG
              }
            ]
          }
        ]
      }
    ];
  }


}

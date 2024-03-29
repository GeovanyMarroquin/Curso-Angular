import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroesNames: string[] = ["Spiderman", "Ironman", "Hulk", "Thor"];
  public lastDeletedHero?: string;

  removeLastHero(): void {
    const lastHero = this.heroesNames.pop();
    this.lastDeletedHero = lastHero;
  }
}

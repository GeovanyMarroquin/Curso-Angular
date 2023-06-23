import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  public characters: Character[] = [
    {
      id: 1,
      name: "Krillin",
      power: 1000
    },
    {
      id: 2,
      name: "Goku",
      power: 9500
    },
    {
      id: 3,
      name: "Veguetta",
      power: 7500,
    }
  ];

  public onNewCharacter(character: Character): void {
    character.id = this.characters.length > 0 ? this.characters[this.characters.length - 1].id + 1 : 1;
    this.characters.push(character);
  }

  public onDeleteCharacter(id: number): void {
    this.characters = this.characters.filter(el => el.id !== id);
  }

}

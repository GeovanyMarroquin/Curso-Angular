import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.services';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  public characterToEdit: Character = { id: "", name: "", power: 0 }
  constructor(
    private dbzService: DbzService
  ) { }

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }

  onEditCharacter(character: Character): void {
    this.characterToEdit = { ...character };
  }
}

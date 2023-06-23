import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.services';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  constructor(
    private dbzService: DbzService
  ) { }

  public characterEdit: Character = {id: "", name: "", power: 0};

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
    this.dbzService.isEdit = true;
    this.characterEdit = { ...character };
  }

  onEmitUpdateCharacter(character: Character): void{
    this.dbzService.updateCharacter(character);
  }

  get isEdit(){
    return this.dbzService.isEdit;
  }
}

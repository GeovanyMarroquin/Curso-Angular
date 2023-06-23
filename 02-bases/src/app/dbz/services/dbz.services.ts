import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public isEdit: boolean = false;
  public characters: Character[] = [
    {
      id: uuid(),
      name: "Krillin",
      power: 1000
    },
    {
      id: uuid(),
      name: "Goku",
      power: 9500
    },
    {
      id: uuid(),
      name: "Veguetta",
      power: 7500,
    }
  ];

  public addCharacter(character: Character): Character {
    const newCharacter = { ...character, id: uuid() }
    this.characters.push(newCharacter);

    return newCharacter;
  }

  public deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(el => el.id !== id);
  }

  public findCharacterById(id: string): Character {
    return this.characters.find(el => el.id === id)!;
  }

  public updateCharacter(character: Character): Character {
    const find = this.findCharacterById(character.id);
    find.name = character.name;
    find.power = character.power;

    this.isEdit = false;
    return find;
  }
}

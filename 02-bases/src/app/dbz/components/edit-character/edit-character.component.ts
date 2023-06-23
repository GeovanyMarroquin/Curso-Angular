import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-edit-character',
  templateUrl: './edit-character.component.html',
  styleUrls: ['./edit-character.component.css']
})
export class EditCharacterComponent {

  @Output()
  public emitUpdateCharacter: EventEmitter<Character> = new EventEmitter();

  @Input()
  public character: Character = {
    id: "",
    name: "",
    power: 0
  }

  editCharacter(): void {
    this.emitUpdateCharacter.emit(this.character);
  }
}

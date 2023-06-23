import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();
  @Input()
  public characterList: Character[] = [];

  emitDeleteCharacter(id: string) {
    this.onDeleteCharacter.emit(id);
  }
}

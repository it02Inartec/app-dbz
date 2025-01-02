import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [];

  @Output()
  public deleteById: EventEmitter<string> = new EventEmitter();

  // onDeleteCharacter(id: string | undefined): void {
  deleteCharacter(id?: string): void {
    if(!id) return;

    this.deleteById.emit(id);
  }
}

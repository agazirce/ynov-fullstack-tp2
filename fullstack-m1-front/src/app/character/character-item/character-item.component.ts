import {Component, Input, Output, EventEmitter, OnChanges, OnInit, OnDestroy, SimpleChanges} from '@angular/core';
import { CharacterItemAttribute, ICharacter } from '../character.model';

@Component({
  selector: 'app-character-item',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.scss']
})
export class CharacterItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() item: ICharacter | undefined;
  @Output() attributeClick = new EventEmitter<CharacterItemAttribute>();

  CharacterItemAttribute = CharacterItemAttribute;

  constructor() {
    console.log('Constructor');
  }

  onAttributeClick(attribute: CharacterItemAttribute): void {
    this.attributeClick.emit(attribute);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes', changes);
  }

  ngOnDestroy(): void {
    console.log('Destroy');
  }

  ngOnInit(): void {
    console.log('Init');
  }
}

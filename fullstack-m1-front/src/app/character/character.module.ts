import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { CharacterItemComponent } from './character-item/character-item.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterComponent } from './character.component';
import { CharacterEditComponent } from './character-edit/character-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    CharacterComponent,
    CharacterEditComponent,
    CharacterItemComponent,
    CharacterListComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatChipsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [
    CharacterComponent
  ]
})
export class CharacterModule { }

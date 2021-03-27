import { Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CharacterService} from '../character.service';
import {ICharacterDto} from '../../common/resource/character/character.dto';

@Component({
  selector: 'app-character-edit',
  templateUrl: './character-edit.component.html',
  styleUrls: ['./character-edit.component.scss'],
  providers: [
    CharacterService
  ]
})
export class CharacterEditComponent {

  formGroup: FormGroup;

  constructor(
    private characterService: CharacterService,
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      id: [undefined],
      firstName: [undefined, [Validators.required, Validators.minLength(2)]],
      lastName: [undefined, [Validators.required, Validators.minLength(2)]],
      age: [undefined, [Validators.required, Validators.min(0)]]
    });
    this.reset();
  }

  save(): void {
    if (this.formGroup.valid) {
      const character: ICharacterDto = {
        id: null,
        firstName: this.formGroup.value.firstName,
        lastName: this.formGroup.value.lastName,
        age: this.formGroup.value.age
      };
      this.characterService.saveItem(character)
        .subscribe(createdCharacter => console.log(createdCharacter));
      this.reset();
    }
  }

  reset(): void {
    this.formGroup.reset({
    });
  }

}

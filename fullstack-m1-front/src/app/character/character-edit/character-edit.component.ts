import { Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CharacterService} from '../character.service';
import {ICharacter} from '../character.model';

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
      birthYear: [undefined, [Validators.max(9999)]]
    });
    this.reset();
  }

  save(): void {
    if (this.formGroup.valid) {
      const character: ICharacter = {
        firstName: this.formGroup.value.firstName,
        lastName: this.formGroup.value.lastName,
        birthYear: this.formGroup.value.birthYear
      };
      this.characterService.saveItem(character)
        .subscribe(createdCharacter => console.log(createdCharacter));
    }
  }

  reset(): void {
    this.formGroup.reset({
      birthYear: 1970
    });
  }

}

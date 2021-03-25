import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './character/character.component';
import { MovieComponent } from './movie/movie.component';
import {CharacterEditComponent} from './character/character-edit/character-edit.component';
import {MovieEditComponent} from './movie/movie-edit/movie-edit.component';
import {CharacterItemComponent} from './character/character-item/character-item.component';

const routes: Routes = [
  {
    path: 'characters',
    component: CharacterComponent
  },
  {
    path: 'characters/:id',
    component: CharacterItemComponent
  },
  {
    path: 'characters/edit',
    component: CharacterEditComponent
  },
  {
    path: 'movies',
    component: MovieComponent
  },
  {
    path: 'movies/edit',
    component: MovieEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './character/character.component';
import { MovieComponent } from './movie/movie.component';
import {CharacterEditComponent} from './character/character-edit/character-edit.component';
import {MovieEditComponent} from './movie/movie-edit/movie-edit.component';
import {CharacterItemComponent} from './character/character-item/character-item.component';
import {MovieItemComponent} from './movie/movie-item/movie-item.component';

const routes: Routes = [
  {
    path: 'characters',
    component: CharacterComponent
  },
  {
    path: 'characters/edit',
    component: CharacterEditComponent
  },
  {
    path: 'characters/:id',
    component: CharacterItemComponent
  },
  {
    path: 'movies',
    component: MovieComponent
  },
  {
    path: 'movies/edit',
    component: MovieEditComponent
  },
  {
    path: 'movies/:id',
    component: MovieItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

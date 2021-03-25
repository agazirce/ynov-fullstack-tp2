import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CharacterResource } from './character/character.resource';
import {MovieResource} from "./movie/movie.resource";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    CharacterResource,
    MovieResource
  ]
})
export class ResourceModule { }

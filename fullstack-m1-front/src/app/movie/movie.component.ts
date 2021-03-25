import { Component } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  items = [
    {
      title: 'Harry Potter',
      year: 2001,
      imageUrl: 'https://fr.web.img2.acsta.net/pictures/18/07/02/17/25/3643090.jpg'
    },
    {
      title: 'The Lord of the Rings',
      year: 2001,
      imageUrl: 'https://fr.web.img3.acsta.net/medias/nmedia/18/35/14/33/18366630.jpg'
    }
  ];
}

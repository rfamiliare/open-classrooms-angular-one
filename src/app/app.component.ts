import {Component} from '@angular/core';
import {Post} from './model/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mon blog !';


  posts: Post[] = [
    {
      title: 'Mon premier post',
      content: 'Contenu 1 très intéressant',
      loveIts: 2,
      createdAt: new Date(2019, 6, 5, 12, 20, 30, 0)
    },
    {
      title: 'Mon deuxième post',
      content: 'Contenu 2, beaucoup moins intéressant',
      loveIts: -2,
      createdAt: new Date(2019, 6, 20, 16, 0, 0, 0)
    },
    new Post('Mon troisième post', 'Celui-ci a été créé via le constructeur !')
  ];
}

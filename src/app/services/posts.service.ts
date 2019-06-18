import {Post} from '../models/post.model';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable()
export class PostsService {

  postsSubject = new Subject<Post[]>();

  private posts: Post[] = [];

  constructor(private httpClient: HttpClient) {
  }

  emitPostSubject() {
    this.postsSubject.next(this.posts);
  }

  addPost(title: string, content: string) {
    const nouveauPost: Post = {
      id: this.posts.length ? this.posts[(this.posts.length - 1)].id + 1 : 0,
      title,
      content,
      loveIts: 0,
      createdAt: new Date()
    };
    this.posts.push(nouveauPost);
    this.savePostOnServer(this.posts.length - 1);
  }

  deletePost(index: number) {
    this.posts.splice(index, 1);
    this.savePostsOnServer();
  }

  getPostsFromServer() {
    firebase.database().ref('/posts')
      .on('value', (data: DataSnapshot) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPostSubject();
        }
      );
  }

  savePostOnServer(index: number) {
    this.httpClient
      .put(`https://http-client-demo-50ba3.firebaseio.com/posts/${index}.json`, this.posts[index])
      .subscribe(() => {
          this.emitPostSubject();
        },
        (error) => console.log('erreur de sauvegarde !! <', error, '>'));
  }

  savePostsOnServer() {
    this.httpClient
      .put(`https://http-client-demo-50ba3.firebaseio.com/posts.json`, this.posts)
      .subscribe(() => {
          this.emitPostSubject();
        },
        (error) => console.log('erreur de sauvegarde !! <', error, '>'));
  }

  like(index: number) {
    this.posts[index].loveIts++;
    this.savePostOnServer(index);
  }

  dislike(index: number) {
    this.posts[index].loveIts--;
    this.savePostOnServer(index);
  }
}

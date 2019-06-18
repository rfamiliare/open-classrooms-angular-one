import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../models/post.model';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;
  @Input() index: number;

  constructor(private postsService: PostsService) {
  }

  ngOnInit() {
  }

  onLike() {
    this.postsService.like(this.index);
  }

  onDislike() {
    this.postsService.dislike(this.index);
  }

  onDelete() {
    this.postsService.deletePost(this.index);
  }
}

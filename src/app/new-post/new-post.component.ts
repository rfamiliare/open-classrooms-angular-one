import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {PostsService} from '../services/posts.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  constructor(private postsService: PostsService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.postsService.addPost(form.value.title, form.value.content);
      this.router.navigate(['/posts']);
    }
  }
}

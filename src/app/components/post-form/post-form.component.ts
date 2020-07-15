import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { faImages, faSmile } from '@fortawesome/free-solid-svg-icons';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {
  faImages = faImages;
  faSmile = faSmile;

  form = {
    postText: '',
  };

  isLoading = false;

  constructor(
    private userService: UserService,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.userService.getUserDetails();
  }

  get user() {
    return this.userService.getUser();
  }

  submitPost() {
    this.isLoading = true;

    const postData = {
      postText: this.form.postText,
      user: this.user,
    };

    this.postService.sendPost(postData);

    this.isLoading = false;

    this.form = {
      postText: '',
    };
  }
}

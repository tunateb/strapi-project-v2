import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/types/post.type';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
  userId = +this.route.snapshot.paramMap.get('id');

  constructor(
    private userService: UserService,
    private postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  get user() {
    return this.userService.getUser();
  }

  get userPosts() {
    return this.postService.getUserPosts(this.userId);
  }
}

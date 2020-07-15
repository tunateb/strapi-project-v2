import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.fetchPosts();
  }

  get posts() {
    return this.postService.getPosts();
  }
}

import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/types/post.type';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  posts: Post[];

  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.postService.fetchPosts().subscribe((response: Post[]) => {
      console.log(response);
      this.posts = response
    })
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/types/post.type';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { PostService } from 'src/app/services/post.service';
import { User } from 'src/app/types/user.type';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent implements OnInit {
  @Input() post: Post;
  @Input() user: User;

  faHeart = faHeart;
  faComment = faComment;

  isPostLiked: boolean = false;

  constructor(private postService: PostService) {}

  ngOnInit(): void {}

  likePost(postId: number) {
    this.postService.likePost(postId);
    this.isPostLiked = true;
  }

  unlikePost(postId: number) {
    this.postService.unlikePost(postId);
    this.isPostLiked = false;
  }
}

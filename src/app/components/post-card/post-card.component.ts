import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/types/post.type';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faComment} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent implements OnInit {
  @Input() post: Post;

  faHeart = faHeart;
  faComment = faComment;

  constructor() {}

  ngOnInit(): void {}
}

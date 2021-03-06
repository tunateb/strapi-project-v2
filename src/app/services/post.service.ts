import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment';
import { Post } from '../types/post.type';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  posts: Post[];

  token = window.localStorage.getItem('token');

  httpOptions = {
    headers: {
      Authorization: `Bearer ${this.token}`,
    },
  };

  constructor(private http: HttpClient, private userService: UserService) {}

  fetchPosts() {
    return this.http
      .get(`${env.postsApiURL}?_sort=created_at:DESC`)
      .subscribe((response: Post[]) => {
        this.posts = response;
      });
  }

  getUserPosts(userId:number) {
    return this.posts.filter((post) => post.user.id === userId);
  }

  getPosts(): Post[] {
    return this.posts;
  }

  sendPost(postData: object) {
    this.http
      .post(`${env.postsApiURL}`, postData, this.httpOptions)
      .subscribe((response) => {
        this.fetchPosts();
      });
  }

  updatePost(updatedPost: Post) {
    this.http
      .put(
        `${env.postsApiURL}/${updatedPost.id}`,
        updatedPost,
        this.httpOptions
      )
      .subscribe((response) => null);
  }

  likePost(postId: number) {
    const likedPost = this.posts.find((post) => post.id === postId);
    likedPost.postLikeCount++;
    this.updatePost(likedPost);
  }

  unlikePost(postId: number) {
    const unlikedPost = this.posts.find((post) => post.id === postId);
    unlikedPost.postLikeCount--;
    this.updatePost(unlikedPost);
  }
}

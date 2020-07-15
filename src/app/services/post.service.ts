import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment';
import { Post } from '../types/post.type';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private posts: Post[];

  constructor(private http: HttpClient) {}

  fetchPosts() {
    return this.http
      .get(`${env.postsApiURL}?_sort=created_at:DESC`)
      .subscribe((response: Post[]) => {
        this.posts = response;
      });
  }

  getPosts(): Post[] {
    return this.posts;
  }

  updatePost(updatedPost: Post) {
    const token = window.localStorage.getItem('token');
    this.http
      .put(`${env.postsApiURL}/${updatedPost.id}`, updatedPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
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

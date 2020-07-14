import { User } from './user.type';

export type Post = {
  id: number;
  postText: string;
  created_at: string;
  updated_at: string;
  user: User;
  postMedia: object;
  postLikeCount: number;
  postCommentCount: number;
};

import { Post } from './post';
import { UserId } from './userId';

export interface Theme {
  subscribers: string[];
  posts: Post[];
  _id: string;
  themeName: string;
  userId: UserId,
  created_at: string;
  updatedAt: string;
  __v: number;
}

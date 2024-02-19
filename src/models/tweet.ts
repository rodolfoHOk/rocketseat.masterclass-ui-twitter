import { User } from './user';

export interface TweetModel {
  user: User;
  content: string;
  comments: number;
  retweets: number;
  likes: number;
}

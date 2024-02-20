import { UserModel } from './user';

export interface TweetModel {
  id: string;
  user: UserModel;
  content: string;
  comments: number;
  retweets: number;
  likes: number;
}

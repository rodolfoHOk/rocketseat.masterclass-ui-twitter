import { UserModel } from './user';

export interface AnswerModel {
  id: string;
  user: UserModel;
  content: string;
  comments: number;
  retweets: number;
  likes: number;
  tweetId: string;
}

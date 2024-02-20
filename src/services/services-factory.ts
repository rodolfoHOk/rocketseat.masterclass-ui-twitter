import { UserService } from './user-service';
import { TweetService } from './tweet-service';
import { AnswerService } from './answer-service';

export class ServicesFactory {
  private static userService: UserService | null = null;
  private static tweetService: TweetService | null = null;
  private static answerService: AnswerService | null = null;

  public static getUserService() {
    if (!this.userService) {
      this.userService = new UserService();
      return this.userService;
    }
    return this.userService;
  }

  public static getTweetService() {
    if (!this.tweetService) {
      this.tweetService = new TweetService();
      return this.tweetService;
    }
    return this.tweetService;
  }

  public static getAnswerService() {
    if (!this.answerService) {
      this.answerService = new AnswerService();
      return this.answerService;
    }
    return this.answerService;
  }
}

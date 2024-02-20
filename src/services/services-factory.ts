import { UserService } from './user-service';
import { TweetService } from './tweet-service';

export class ServicesFactory {
  private static userService: UserService | null = null;
  private static tweetService: TweetService | null = null;

  public static getUserService() {
    if (!this.userService) {
      return new UserService();
    }
    return this.userService;
  }

  public static getTweetService() {
    if (!this.tweetService) {
      return new TweetService();
    }
    return this.tweetService;
  }
}

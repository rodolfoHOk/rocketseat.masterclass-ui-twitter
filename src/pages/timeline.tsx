import { Header } from '../components/header';
import { Tweet } from '../components/tweet';
import { Separator } from '../components/separator';
import { TweetModel } from '../models/tweet';
import { UserModel } from '../models/user';
import { ServicesFactory } from '../services/services-factory';
import './timeline.css';

export function Timeline() {
  const currentUser: UserModel =
    ServicesFactory.getUserService().getCurrentUser();

  const tweets: TweetModel[] = ServicesFactory.getTweetService().listTweets();

  return (
    <main className="timeline">
      <Header title="Home" />

      <form className="new-tweet-form">
        <label htmlFor="tweet">
          <img src={currentUser.image_url} alt={currentUser.name} />
          <textarea id="tweet" placeholder="What's happening?" />
        </label>

        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </main>
  );
}

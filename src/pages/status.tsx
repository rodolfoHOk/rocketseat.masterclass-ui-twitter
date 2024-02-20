import { useParams } from 'react-router-dom';
import { Header } from '../components/header';
import { Separator } from '../components/separator';
import { Tweet } from '../components/tweet';
import { TweetModel } from '../models/tweet';
import { UserModel } from '../models/user';
import { ServicesFactory } from '../services/services-factory';
import './status.css';

export function Status() {
  const { tweetId } = useParams();

  if (!tweetId) {
    return <span>Tweet not found 404</span>;
  }

  const tweet: TweetModel | undefined =
    ServicesFactory.getTweetService().getTweet(tweetId);

  if (!tweet) {
    return <span>Tweet not found 404</span>;
  }

  const answers: TweetModel[] =
    ServicesFactory.getTweetService().getTweetAnswers(tweetId);

  const currentUser: UserModel =
    ServicesFactory.getUserService().getCurrentUser();

  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet tweet={tweet} />

      <Separator />

      <form className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src={currentUser.image_url} alt={currentUser.name} />
          <textarea id="tweet" placeholder="Tweet your answer" />
        </label>

        <button type="submit">Answer</button>
      </form>

      {answers.map((answer, index) => (
        <Tweet key={`${answer.user.username}-${index}`} tweet={answer} />
      ))}
    </main>
  );
}

import { useEffect, useState } from 'react';
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
  const [tweet, setTweet] = useState<TweetModel | undefined>(undefined);
  const [answers, setAnswers] = useState<TweetModel[]>([]);
  const [currentUser, setCurrentUser] = useState<UserModel | undefined>(
    undefined
  );

  async function fetchTweet(tweetId: string) {
    const tweet = await ServicesFactory.getTweetService().getTweet(tweetId);
    setTweet(tweet);
  }

  useEffect(() => {
    if (tweetId) {
      fetchTweet(tweetId);
    }
  }, [tweetId]);

  async function fetchAnswers(tweetId: string) {
    const initialAnswers: TweetModel[] =
      await ServicesFactory.getTweetService().getTweetAnswers(tweetId);
    setAnswers(initialAnswers);
  }

  useEffect(() => {
    if (tweetId) {
      fetchAnswers(tweetId);
    }
  }, [tweetId]);

  async function fetchCurrentUser() {
    const data: UserModel =
      await ServicesFactory.getUserService().getCurrentUser();
    setCurrentUser(data);
  }

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  if (!tweetId) {
    return <span>Tweet not found 404</span>;
  }

  if (!tweet) {
    return <span>Tweet not found 404</span>;
  }

  if (!currentUser) {
    return <span>Loading current user</span>;
  }

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

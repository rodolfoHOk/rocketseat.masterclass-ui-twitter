import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid';
import { Header } from '../components/header';
import { Separator } from '../components/separator';
import { Tweet } from '../components/tweet';
import { TweetModel } from '../models/tweet';
import { UserModel } from '../models/user';
import { AnswerModel } from '../models/answer';
import { ServicesFactory } from '../services/services-factory';
import './status.css';

export function Status() {
  const { tweetId } = useParams();
  const [tweet, setTweet] = useState<TweetModel | undefined>(undefined);
  const [answers, setAnswers] = useState<TweetModel[]>([]);
  const [currentUser, setCurrentUser] = useState<UserModel | undefined>(
    undefined
  );
  const [newAnswerContent, setNewAnswerContent] = useState('');

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
      await ServicesFactory.getAnswerService().getTweetAnswers(tweetId);
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

  function handleAnswerContent(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewAnswerContent(event.target.value);
  }

  async function createNewAnswer(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (currentUser && newAnswerContent.trim().length > 0 && tweet) {
      const newAnswer: AnswerModel = {
        id: uuidV4(),
        user: currentUser,
        content: newAnswerContent,
        comments: 0,
        retweets: 0,
        likes: 0,
        tweetId: tweet.id,
      };
      await ServicesFactory.getAnswerService().addTweetAnswer(newAnswer);
      setAnswers((previousState) => [newAnswer, ...previousState]);
      setNewAnswerContent('');
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet tweet={tweet} />

      <Separator />

      <form className="answer-tweet-form" onSubmit={createNewAnswer}>
        <label htmlFor="tweet">
          <img src={currentUser.image_url} alt={currentUser.name} />
          <textarea
            id="tweet"
            placeholder="Tweet your answer"
            value={newAnswerContent}
            onChange={handleAnswerContent}
          />
        </label>

        <button type="submit">Answer</button>
      </form>

      {answers.map((answer, index) => (
        <Tweet key={`${answer.user.username}-${index}`} tweet={answer} />
      ))}
    </main>
  );
}

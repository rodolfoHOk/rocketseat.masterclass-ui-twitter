import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { Header } from '../components/header';
import { Tweet } from '../components/tweet';
import { Separator } from '../components/separator';
import { TweetModel } from '../models/tweet';
import { UserModel } from '../models/user';
import { ServicesFactory } from '../services/services-factory';
import './timeline.css';

export function Timeline() {
  const [tweets, setTweets] = useState<TweetModel[]>([]);
  const [currentUser, setCurrentUser] = useState<UserModel | null>(null);
  const [newTweetContent, setNewTweetContent] = useState('');

  async function fetchTweets() {
    const response = await ServicesFactory.getTweetService().listTweets();
    setTweets(response);
  }

  useEffect(() => {
    fetchTweets();
  }, []);

  async function fetchCurrentUser() {
    const data: UserModel =
      await ServicesFactory.getUserService().getCurrentUser();
    setCurrentUser(data);
  }

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  if (!currentUser) {
    return <span>Loading current user</span>;
  }

  function handleTweetContent(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewTweetContent(event.target.value);
  }

  async function createNewTweet(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (currentUser && newTweetContent.trim().length > 0) {
      const newTweet: TweetModel = {
        id: uuidV4(),
        user: currentUser,
        content: newTweetContent,
        comments: 0,
        retweets: 0,
        likes: 0,
      };
      await ServicesFactory.getTweetService().addTweet(newTweet);
      setTweets((previousState) => [newTweet, ...previousState]);
      setNewTweetContent('');
    }
  }

  return (
    <main className="timeline">
      <Header title="Home" />

      <form className="new-tweet-form" onSubmit={createNewTweet}>
        <label htmlFor="tweet">
          <img src={currentUser.image_url} alt={currentUser.name} />
          <textarea
            id="tweet"
            placeholder="What's happening?"
            value={newTweetContent}
            onChange={handleTweetContent}
          />
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

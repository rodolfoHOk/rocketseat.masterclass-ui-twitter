import { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { Header } from '../components/header';
import { Tweet } from '../components/tweet';
import { Separator } from '../components/separator';
import { TweetModel } from '../models/tweet';
import { UserModel } from '../models/user';
import { ServicesFactory } from '../services/services-factory';
import './timeline.css';

export function Timeline() {
  const initialTweets: TweetModel[] =
    ServicesFactory.getTweetService().listTweets();

  const [tweets, setTweets] = useState<TweetModel[]>(initialTweets);
  const [newTweetContent, setNewTweetContent] = useState('');

  const currentUser: UserModel =
    ServicesFactory.getUserService().getCurrentUser();

  function handleTweetContent(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewTweetContent(event.target.value);
  }

  function createNewTweet(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newTweet: TweetModel = {
      id: uuidV4(),
      user: currentUser,
      content: newTweetContent,
      comments: 0,
      retweets: 0,
      likes: 0,
    };
    ServicesFactory.getTweetService().addTweet(newTweet);
    setTweets((previousState) => [newTweet, ...previousState]);
    setNewTweetContent('');
  }

  return (
    <main className="timeline">
      <Header title="Home" />

      <form
        className="new-tweet-form"
        onSubmit={(event) => createNewTweet(event)}
      >
        <label htmlFor="tweet">
          <img src={currentUser.image_url} alt={currentUser.name} />
          <textarea
            id="tweet"
            placeholder="What's happening?"
            value={newTweetContent}
            onChange={(event) => handleTweetContent(event)}
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

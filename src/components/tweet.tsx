import { ArrowsClockwise, ChatCircle, Heart } from '@phosphor-icons/react';
import './tweet.css';
import { TweetModel } from '../models/tweet';

interface TweetProps {
  tweet: TweetModel;
}

export function Tweet({ tweet }: TweetProps) {
  return (
    <a href="" className="tweet">
      <img src={tweet.user.image_url} alt={tweet.user.name} />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>{tweet.user.name}</strong>
          <span>{tweet.user.username}</span>
        </div>

        <p>{tweet.content}</p>

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            <span>{tweet.comments}</span>
          </button>

          <button type="button">
            <ArrowsClockwise />
            <span>{tweet.retweets}</span>
          </button>

          <button type="button">
            <Heart />
            <span>{tweet.likes}</span>
          </button>
        </div>
      </div>
    </a>
  );
}

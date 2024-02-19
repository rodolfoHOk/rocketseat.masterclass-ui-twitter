import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  Sparkle,
  User,
} from '@phosphor-icons/react';
import twitterLogo from './assets/logo-twitter.svg';
import { Tweet } from './components/tweet';

export function App() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <img className="logo" src={twitterLogo} alt="Logo" />

        <nav className="main-navigation">
          <a className="active" href="">
            <House weight="fill" />
            <span>Home</span>
          </a>

          <a href="">
            <Hash />
            <span>Explore</span>
          </a>

          <a href="">
            <Bell />
            <span>Notifications</span>
          </a>

          <a href="">
            <Envelope />
            <span>Messages</span>
          </a>

          <a href="">
            <BookmarkSimple />
            <span>Bookmarks</span>
          </a>

          <a href="">
            <FileText />
            <span>Lists</span>
          </a>

          <a href="">
            <User />
            <span>Profile</span>
          </a>

          <a href="">
            <DotsThreeCircle />
            <span>More</span>
          </a>
        </nav>

        <button className="new-tweet" type="button">
          Tweet
        </button>
      </aside>

      <div className="content">
        <main className="timeline">
          <div className="timeline-header">
            <span>Home</span>
            <Sparkle />
          </div>

          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/rodolfoHOk.png" alt="Rudolf HiOk" />
              <textarea id="tweet" placeholder="What's happening?" />
            </label>

            <button type="submit">Tweet</button>
          </form>

          <div className="separator"></div>

          <Tweet />

          <Tweet />

          <Tweet />

          <Tweet />
        </main>
      </div>
    </div>
  );
}

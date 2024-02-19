import twitterLogo from './assets/logo-twitter.svg';
import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  User,
} from '@phosphor-icons/react';

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

      <div className="content">content</div>
    </div>
  );
}

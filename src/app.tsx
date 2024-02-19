import { Sidebar } from './components/sidebar';
import { Header } from './components/header';
import { Tweet } from './components/tweet';
import { Separator } from './components/separator';

export function App() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="content">
        <main className="timeline">
          <Header title="Home" />

          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/rodolfoHOk.png" alt="Rudolf HiOk" />
              <textarea id="tweet" placeholder="What's happening?" />
            </label>

            <button type="submit">Tweet</button>
          </form>

          <Separator />

          <Tweet />

          <Tweet />

          <Tweet />

          <Tweet />
        </main>
      </div>
    </div>
  );
}

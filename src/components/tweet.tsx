import { ArrowsClockwise, ChatCircle, Heart } from '@phosphor-icons/react';
import './tweet.css';

export function Tweet() {
  return (
    <a href="" className="tweet">
      <img src="https://github.com/rodolfohok.png" alt="Rudolf HiOk" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>{'Name'}</strong>
          <span>{'@username'}</span>
        </div>

        <p>
          {`Acabei de migrar um projeto React GIGANTE de create-react-app para Vite e os resultados foram:\n
          ✅ npm start: De 32s para 400ms (sim, demorava 30s)
          ✅ npm build: De 120s para 22s\n
          Além disso, troquei do Yarn para o PNPM e o install das deps mudou de 24s para 8s 🔥`}
        </p>

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            <span>20</span>
          </button>

          <button type="button">
            <ArrowsClockwise />
            <span>20</span>
          </button>

          <button type="button">
            <Heart />
            <span>20</span>
          </button>
        </div>
      </div>
    </a>
  );
}

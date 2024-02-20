import { Sidebar } from '../components/sidebar';
import { Header } from '../components/header';
import { Tweet } from '../components/tweet';
import { Separator } from '../components/separator';
import { TweetModel } from '../models/tweet';
import { User } from '../models/user';
import './timeline.css';

export function Timeline() {
  const currentUser: User = {
    name: 'Usuária anônima',
    username: '@user',
    image_url: '@user.png',
  };

  const tweets: TweetModel[] = [
    {
      user: {
        name: 'John Travolta',
        username: '@john',
        image_url: '@john.png',
      },
      content: `Acabei de migrar um projeto React GIGANTE de create-react-app para Vite e os resultados foram:\n
      ✅ npm start: De 32s para 400ms (sim, demorava 30s) 
      ✅ npm build: De 120s para 22s\n
      Além disso, troquei do Yarn para o PNPM e o install das deps mudou de 24s para 8s 🔥, 'Teste', 'Deu certo tweet(ar)!`,
      comments: 3,
      retweets: 2,
      likes: 5,
    },
    {
      user: {
        name: 'Angela Arden',
        username: '@angela_arden',
        image_url: '@angela_arden.png',
      },
      content: `Estamos vivendo um momento interessante no mercado de startups.\n
      Soluções que resolvem problemas de forma semelhante, mas com precificação mais simples, usabilidade e foco em dev first.\n
      Tudo começa com um projeto open source/free 👀`,
      comments: 28,
      retweets: 16,
      likes: 30,
    },
    {
      user: {
        name: 'Julia Stone',
        username: '@julia',
        image_url: '@julia.png',
      },
      content: `Se você quer se destacar no universo da programação web, é importante manter-se atualizado com as últimas tendências e tecnologias.\n
      Participe de conferências, siga blogs e sites de tecnologia, e junte-se a comunidades online para aprimorar suas habilidades #programação #webdev`,
      comments: 10,
      retweets: 2,
      likes: 21,
    },
    {
      user: {
        name: 'Robert Julio',
        username: '@juliorobert12',
        image_url: '@juliorobert12.png',
      },
      content: `lidar com datas continua sendo uma das coisas mais chatas em programação... por exemplo:\n
      - o mês no JS começa em 0 (janeiro = 0)
      - a semana começa em 0 (domingo = 0) 
      - o mês no MySQL começa em 1 (janeiro = 1) 
      - a semana no MySQL começa na segunda-feira (domingo = 6)`,
      comments: 101,
      retweets: 15,
      likes: 219,
    },
    {
      user: {
        name: 'Joey Tribiani',
        username: '@joey',
        image_url: '@joey.png',
      },
      content: `melhor velocidade pra vídeos do youtube: 1.75x`,
      comments: 123,
      retweets: 35,
      likes: 158,
    },
  ];

  return (
    <div className="layout">
      <Sidebar />

      <div className="content">
        <main className="timeline">
          <Header title="Home" />

          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src={currentUser.image_url} alt={currentUser.name} />
              <textarea id="tweet" placeholder="What's happening?" />
            </label>

            <button type="submit">Tweet</button>
          </form>

          <Separator />

          {tweets.map((tweet, index) => (
            <Tweet key={`${tweet.user.username}-${index}`} tweet={tweet} />
          ))}
        </main>
      </div>
    </div>
  );
}

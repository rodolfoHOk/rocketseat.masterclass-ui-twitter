import { TweetModel } from '../models/tweet';

export class TweetService {
  private tweets: TweetModel[] = [
    {
      id: '3686d465-1259-4258-80c1-c00d4b8dd416',
      user: {
        name: 'John Travolta',
        username: '@john',
        image_url: 'http://localhost:5173/@john.png',
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
      id: 'd540df37-1953-4f84-856f-6013c89a2166',
      user: {
        name: 'Angela Arden',
        username: '@angela_arden',
        image_url: 'http://localhost:5173/@angela_arden.png',
      },
      content: `Estamos vivendo um momento interessante no mercado de startups.\n
      Soluções que resolvem problemas de forma semelhante, mas com precificação mais simples, usabilidade e foco em dev first.\n
      Tudo começa com um projeto open source/free 👀`,
      comments: 28,
      retweets: 16,
      likes: 30,
    },
    {
      id: '401ad854-52df-4475-a700-819d4f016446',
      user: {
        name: 'Julia Stone',
        username: '@julia',
        image_url: 'http://localhost:5173/@julia.png',
      },
      content: `Se você quer se destacar no universo da programação web, é importante manter-se atualizado com as últimas tendências e tecnologias.\n
      Participe de conferências, siga blogs e sites de tecnologia, e junte-se a comunidades online para aprimorar suas habilidades #programação #webdev`,
      comments: 10,
      retweets: 2,
      likes: 21,
    },
    {
      id: 'ab3ce648-dee9-46e8-b390-8dca1c241841',
      user: {
        name: 'Robert Julio',
        username: '@juliorobert12',
        image_url: 'http://localhost:5173/@juliorobert12.png',
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
      id: '607aa1e0-fd02-455d-a218-42a4518f4cb1',
      user: {
        name: 'Joey Tribiani',
        username: '@joey',
        image_url: 'http://localhost:5173/@joey.png',
      },
      content: `melhor velocidade pra vídeos do youtube: 1.75x`,
      comments: 123,
      retweets: 35,
      likes: 158,
    },
  ];

  private tweetAnswers: TweetModel[] = [
    {
      id: 'c8198c3b-1790-4376-9127-a911a0169117',
      user: {
        name: 'Angela Arden',
        username: '@angela_arden',
        image_url: 'http://localhost:5173/@angela_arden.png',
      },
      content: `Concordo...`,
      comments: 0,
      retweets: 0,
      likes: 2,
    },
    {
      id: '8d49dc18-1296-49b0-a3f4-19bdc34c13ce',
      user: {
        name: 'Julia Stone',
        username: '@julia',
        image_url: 'http://localhost:5173/@julia.png',
      },
      content: `Olha, faz sentido!`,
      comments: 1,
      retweets: 0,
      likes: 1,
    },
    {
      id: '798c847f-075b-47f9-ae6a-08853b4be5ff',
      user: {
        name: 'Joey Tribiani',
        username: '@joey',
        image_url: 'http://localhost:5173/@joey.png',
      },
      content: `Parabéns pelo progresso!`,
      comments: 0,
      retweets: 0,
      likes: 3,
    },
  ];

  public listTweets(): Promise<TweetModel[]> {
    return Promise.resolve([...this.tweets]);
  }

  public getTweetAnswers(tweetId: string): Promise<TweetModel[]> {
    if (tweetId.length === 36) {
      return Promise.resolve([...this.tweetAnswers]);
    }
    return Promise.resolve([]);
  }

  public getTweet(tweetId: string): Promise<TweetModel | undefined> {
    return Promise.resolve(this.tweets.find((tweet) => tweet.id === tweetId));
  }

  public addTweet(tweet: TweetModel): Promise<void> {
    this.tweets.unshift(tweet);
    return Promise.resolve();
  }
}

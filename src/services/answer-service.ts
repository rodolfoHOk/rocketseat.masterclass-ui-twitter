import { AnswerModel } from '../models/answer';

export class AnswerService {
  private tweetAnswers: AnswerModel[] = [
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
      tweetId: '3686d465-1259-4258-80c1-c00d4b8dd416',
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
      tweetId: '3686d465-1259-4258-80c1-c00d4b8dd416',
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
      tweetId: '3686d465-1259-4258-80c1-c00d4b8dd416',
    },
    {
      id: '8d49dc18-1296-49b0-a3f4-19bdc34c13ce',
      user: {
        name: 'Julia Stone',
        username: '@julia',
        image_url: 'http://localhost:5173/@julia.png',
      },
      content: `Olha, concordo plenamente!`,
      comments: 1,
      retweets: 0,
      likes: 1,
      tweetId: 'd540df37-1953-4f84-856f-6013c89a2166',
    },
  ];

  public getTweetAnswers(tweetId: string): Promise<AnswerModel[]> {
    if (tweetId.length === 36) {
      return Promise.resolve(
        this.tweetAnswers.filter((answer) => answer.tweetId === tweetId)
      );
    }
    return Promise.resolve([]);
  }

  public addTweetAnswer(answer: AnswerModel): Promise<void> {
    this.tweetAnswers.unshift(answer);
    return Promise.resolve();
  }
}

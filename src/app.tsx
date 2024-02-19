import { Tweet } from './components/tweet';

export function App() {
  return (
    <div>
      <Tweet user="Rudy HiOk" likes={3}>
        Meu primeiro tweet
      </Tweet>

      <Tweet user="Marianne">Meu milésimo tweet</Tweet>
    </div>
  );
}

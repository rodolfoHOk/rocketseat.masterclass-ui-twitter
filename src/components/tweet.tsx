interface TweetProps {
  user: string;
  children: string;
  likes?: number;
}

export function Tweet({ user, likes, children }: TweetProps) {
  return (
    <div className="tweet" style={{ borderRadius: 8 }}>
      <strong>{user}</strong>
      <p>{children}</p>
      <button>Like {likes}</button>
    </div>
  );
}

export default function Episodes({ episodes }) {
  return (
    <section>
      <h3>Featured Episodes</h3>
      <div className="carousel">
        {episodes.map((ep) => (
          <div key={ep.id.videoId} className="card">
            <img src={ep.snippet.thumbnails.medium.url} alt={ep.snippet.title} />
            <h4>{ep.snippet.title}</h4>
            <a href={`https://www.youtube.com/watch?v=${ep.id.videoId}`} target="_blank" rel="noreferrer">Watch →</a>
          </div>
        ))}
      </div>
    </section>
  );
}

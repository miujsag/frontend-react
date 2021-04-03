import Article from "./Article/Article";
import "./Articles.css";

export default function Articles({
  articles,
  isMore,
  isLoading,
  handleLoadMore,
}) {
  const articleList =
    articles && articles.length > 0
      ? articles.map((article) => Article(article, true))
      : [];

  return (
    <div>
      <ul className="articles inline">{articleList}</ul>
      {isMore ? (
        <div className="load-more">
          <button type="button" onClick={handleLoadMore} disabled={isLoading}>
            Még több cikk
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

import { useState, useEffect } from "react";
import "./ArticleDetails.css";
import Loading from "../Loading/Loading";

function groupBySite(articles) {
  if (!articles || !articles.length) {
    return {};
  }

  return articles.reduce(
    function (accumulator, article) {
      if (!article.Site?.name) {
        accumulator["egyéb"].push(article);
      } else {
        const existing = accumulator[article.Site.name];

        if (!existing) {
          accumulator[article.Site.name] = [];
        }

        accumulator[article.Site.name].push(article);
      }

      return accumulator;
    },
    { egyéb: [] }
  );
}

function ReferenceList({ references, type }) {
  const groupedReferences = groupBySite(references);
  const otherReferences = groupedReferences["egyéb"];

  return references ? (
    <div className="article-details-reference">
      {type === "reference" ? (
        <h2>A cikk hivatkozásai:</h2>
      ) : (
        <h2>Erre a cikkre hivatkozik:</h2>
      )}
      <ul>
        {Object.keys(groupedReferences)
          .sort()
          .filter((group) => group !== "egyéb")
          .map((group) => {
            const references = groupedReferences[group];
            console.log({ group, references });
            return references.length ? (
              <li key={`${type}-${group}`}>
                <h3>{group}</h3>
                <ul>
                  {references.map((reference) => (
                    <li key={`${type}-${reference.id}`}>
                      <a href={reference.url} target="_blank">
                        {reference.title || reference.url}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              ""
            );
          })}
        {otherReferences && otherReferences.length ? (
          <li>
            <h3>egyéb</h3>
            <ul>
              {otherReferences.map((reference) => (
                <li key={`reference-${reference.id}`}>
                  <a href={reference.url} target="_blank">
                    {reference.title || reference.url}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ) : (
          ""
        )}
      </ul>
    </div>
  ) : (
    ""
  );
}

function KeywordList({ keywords }) {
  return keywords ? (
    <div className="article-details-keywords">
      <h2>Kulcsszavak</h2>
      <ul className="inline">
        {keywords.map((keyword) => (
          <li key={`keyword-${keyword.id}`}>{keyword.stem}</li>
        ))}
      </ul>
    </div>
  ) : (
    ""
  );
}

export default function ArticleDetails({ id }) {
  const [article, setArticle] = useState("");
  const [similarArticles, setSimilarArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4002/articles/222")
      .then((response) => response.json())
      .then(function ({ article, similarArticles }) {
        if (article) {
          setArticle(article);
          setSimilarArticles(similarArticles);
          setKeywords(article.keyword.map((keyword) => keyword.stem));
        }
      })
      .catch(console.log)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <main>
      {isLoading ? <Loading isActive={isLoading} /> : ""}
      {article ? (
        <div className="article-details">
          <h1>{article.title}</h1>
          <p>
            <strong>url: </strong>
            {article.url}
          </p>
          <p>
            <strong>lead: </strong>
            {article.description}
          </p>
          {article.Category ? (
            <p>
              <strong>kategória: </strong>
              {article.Category.name}
            </p>
          ) : (
            ""
          )}
          {article.Site ? (
            <p>
              <strong>oldal:</strong>
              {article.Site.name || article.Site.url}
            </p>
          ) : (
            ""
          )}
          <ReferenceList references={article.reference} type={"reference"} />
          <ReferenceList references={article.referrer} type={"referrer"} />
          <KeywordList keywords={article.keyword} />
          <h2>Hasonló cikkek</h2>
          <ul>
            {similarArticles.map((article) => (
              <li key={`similar-${article.id}`}>
                <p>
                  <a href={article.url}>
                    {article.Site ? `${article.Site.name}: ` : ""}
                    {article.title}
                  </a>
                </p>
                <ul>
                  {article.keyword.map((keyword) => (
                    <li
                      className={`${
                        keywords.includes(keyword.stem) ? "active" : ""
                      }`}
                    >
                      {keyword.stem}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        "A keresett cikk nem található"
      )}
    </main>
  );
}

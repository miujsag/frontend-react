import React from "react";
import {
  format,
  distanceInWordsStrict,
  getMinutes,
  differenceInHours,
  differenceInDays,
  isYesterday,
  differenceInMonths,
} from "date-fns";
import hu from "date-fns/locale/hu";
import ReadTimeIcon from "../../svg/ReadTimeIcon";
import "./Article.css";

function truncate(text) {
  return !text || text.length < 230 ? text : text.substring(0, 230) + "...";
}

function convertToMinutes(time) {
  if (!time) return "";

  const timeToMinutes = getMinutes(time);

  if (timeToMinutes === 0) return "kevesebb, mint egy perc";

  return `${timeToMinutes} perc`;
}

function formatDatetime(time) {
  if (!time) return "";

  if (differenceInMonths(new Date(), time) > 0) {
    return format(time, "YYYY MMMM DD", { locale: hu });
  } else if (isYesterday(time) || differenceInDays(new Date(), time) > 0) {
    return format(time, "MMMM DD", { locale: hu });
  } else if (differenceInHours(new Date(), time) > 0) {
    return format(time, "HH:mm", { locale: hu });
  } else {
    return distanceInWordsStrict(new Date(), time, { locale: hu });
  }
}

function toISOString(datetime) {
  return new Date(datetime).toISOString();
}

function renderHighlights(highlights, articleIndex) {
  if (highlights instanceof Array) {
    return highlights.map((highlight, index) => (
      <p
        key={`article-${articleIndex}-${index}`}
        className="highlight"
        dangerouslySetInnerHTML={{ __html: truncate(highlight) }}
      ></p>
    ));
  }
}

function renderDescription(description) {
  return <p>{truncate(description)}</p>;
}

export default function Article(article, index) {
  return (
    <li className="article" key={article.id || index}>
      <header className="inline">
        <time dateTime={toISOString(article.publishedAt)}>
          {formatDatetime(article.publishedAt)}
        </time>
        <img
          className={`logo-${article.site.slug}`}
          src={`../../images/sites/${article.site.slug}.png`}
          alt={`${article.site.name} logó`}
        />
      </header>
      <div className="article-body">
        {/*  <img className="cover" src={article.image} /> */}
        <h2>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            {article.title}
          </a>
        </h2>
        {article.highlights
          ? renderHighlights(article.highlights, index)
          : renderDescription(article.description)}
      </div>
      <footer>
        {article.estimatedReadTime ? (
          <div className="estimated-read-time">
            <ReadTimeIcon /> {convertToMinutes(article.estimatedReadTime)}
          </div>
        ) : (
          ""
        )}
      </footer>
    </li>
  );
}

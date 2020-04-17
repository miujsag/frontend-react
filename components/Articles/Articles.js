import React from "react";
import fetch from "isomorphic-unfetch";
import Article from "./Article/Article";
import "./Articles.css";

export default class Articles extends React.Component {
  state = {
    articles: [],
    isError: false,
    isLoading: false
  };

  getCheckedIds(options) {
    return options.filter(option => option.checked).map(option => option.id);
  }

  getLastArticlesDateTime() {
    const { articles } = this.state;

    if (articles && articles.length > 1) {
      const lastArticle = articles[articles.length - 1];

      return lastArticle.publishedAt;
    } else {
      return new Date();
    }
  }

  getArticles = async (categories, sites, isLoadMore = false) => {
    this.setState({
      isLoading: true
    });
    console.log("getarticles", isLoadMore);
    const categoryIds = this.getCheckedIds(categories);
    const siteIds = this.getCheckedIds(sites);
    const lastArticlesDateTime = this.getLastArticlesDateTime();

    const until = isLoadMore ? lastArticlesDateTime : "";

    const response = await fetch(
      `http://localhost:4000/api/articles?categories=${categoryIds.join(
        ","
      )}&sites=${siteIds.join(",")}&until=${until}`
    );
    if (response.status === 200) {
      this.setState({
        isError: false
      });

      const { articles, isMore } = await response.json();
      console.log(articles[0]);
      if (isLoadMore) {
        const oldArticles = [...this.state.articles];
        this.setState({
          isMore,
          articles: [...oldArticles, ...articles]
        });
      } else {
        this.setState({
          articles,
          isMore
        });
      }
    } else {
      this.setState({
        isError: true
      });
    }

    this.setState({
      isLoading: false
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps === this.props) {
      return;
    }

    if (this.props.context.state) {
      const { categories, sites } = this.props.context.state;

      if (categories && categories.length) {
        this.getArticles(categories, sites);
      }
    }
  }

  render() {
    const { articles, isMore } = this.state;

    const articleList =
      articles && articles.length > 1 ? this.state.articles.map(Article) : [];

    return (
      <main className="">
        <ul className="articles inline">{articleList}</ul>
        {isMore ? (
          <div className="load-more">
            <button
              type="button"
              onClick={() =>
                this.getArticles(
                  this.props.context.state.categories,
                  this.props.context.state.sites,
                  true
                )
              }
            >
              Még több cikk
            </button>
          </div>
        ) : (
          ""
        )}
      </main>
    );
  }
}

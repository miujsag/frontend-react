import { Component } from "react";
import getConfig from "next/config";
import Articles from "../Articles/Articles.js";
import SearchForm from "../SearchForm/SearchForm.js";
import {
  getCurrentDate,
  getLastWeeksDate,
  formatForSearch,
} from "../../utils/date";

const { publicRuntimeConfig } = getConfig();

export default class Main extends Component {
  state = {
    articles: null,
    isMore: false,
    isLoading: false,
    search: {
      from: getLastWeeksDate(),
      until: getCurrentDate(),
      query: "",
      order: "relevance",
      skip: 0,
      total: 0,
      didSearch: false,
    },
  };

  getCheckedIds(options) {
    return options
      .filter((option) => option.checked)
      .map((option) => option.id);
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

  handleLoadMore = () => {
    if (this.props.isSearch) {
      this.search(true);
    } else {
      this.getArticles(true);
    }
  };

  getArticles = async (isLoadMore = false) => {
    this.setState({
      isLoading: true,
    });

    const categoryIds = this.getCheckedIds(this.props.state.categories);
    const siteIds = this.getCheckedIds(this.props.state.sites);
    const lastArticlesDateTime = this.getLastArticlesDateTime();

    const until = isLoadMore ? lastArticlesDateTime : "";

    const response = await fetch(
      `${publicRuntimeConfig.API}/articles?categories=${categoryIds.join(
        ","
      )}&sites=${siteIds.join(",")}&until=${until}`
    );
    if (response.status === 200) {
      this.setState({
        isError: false,
      });

      const { articles, isMore } = await response.json();

      if (isLoadMore) {
        const oldArticles = [...this.state.articles];
        this.setState({
          isMore,
          articles: [...oldArticles, ...articles],
        });
      } else {
        this.setState({
          articles,
          isMore,
        });
      }
    } else {
      this.setState({
        isError: true,
      });
    }

    this.setState({
      isLoading: false,
    });
  };

  handleChange = (event) => {
    const { search } = this.state;
    const { name, value } = event.target;

    search[name] = value;

    this.setState(
      {
        search,
      },
      () => {
        if (name !== "query") {
          this.search();
        }
      }
    );
  };

  handleDateChange = (name, value) => {
    const { search } = this.state;

    search[name] = value;

    this.setState(
      {
        search,
      },
      () => this.search()
    );
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.search();
  };

  search = async (isLoadMore = false) => {
    const { search } = this.state;
    const { from, until, query, order, skip } = search;
    const newSkipValue = isLoadMore ? skip + 20 : 0;

    if (!query) {
      return;
    }

    this.setState({
      isLoading: true,
    });

    const categoryIds = this.getCheckedIds(this.props.state.categories);
    const siteIds = this.getCheckedIds(this.props.state.sites);

    const response = await fetch(
      `${
        publicRuntimeConfig.API
      }/articles/search?query=${query}&from=${formatForSearch(
        from
      )}&until=${formatForSearch(until)}&categories=${categoryIds.join(
        ","
      )}&sites=${siteIds.join(",")}&skip=${newSkipValue}&sort=${order}`
    );

    if (response.status === 200) {
      search.skip = newSkipValue;

      this.setState({
        search,
        isError: false,
      });

      const { articles, isMore, total } = await response.json();

      search.didSearch = true;
      search.total = total;

      if (isLoadMore) {
        const oldArticles = [...this.state.articles];
        this.setState({
          search,
          isMore,
          articles: [...oldArticles, ...articles],
        });
      } else {
        this.setState({
          search,
          articles,
          isMore,
        });
      }
    } else {
      this.setState({
        isError: true,
      });
    }
  };

  componentDidUpdate(prevProps) {
    if (prevProps === this.props) {
      return;
    }

    const { isSearch } = this.props;
    const { categories } = this.props.state;

    if (categories && categories.length) {
      if (isSearch) {
        this.search();
      } else {
        this.getArticles();
      }
    }
  }

  render() {
    const { articles, isMore, search } = this.state;

    return (
      <main>
        {this.props.isSearch ? (
          <SearchForm
            from={search.from}
            until={search.until}
            query={search.query}
            order={search.order}
            total={search.total}
            didSearch={search.didSearch}
            handleChange={this.handleChange}
            handleDateChange={this.handleDateChange}
            handleSubmit={this.handleSubmit}
          />
        ) : (
          ""
        )}
        <Articles
          articles={articles}
          isMore={isMore}
          handleLoadMore={this.handleLoadMore}
        />
      </main>
    );
  }
}

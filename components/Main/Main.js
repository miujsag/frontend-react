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
    from: getLastWeeksDate(),
    until: getCurrentDate(),
    query: "",
    order: "relevance",
    skip: 0,
    total: 0,
    didSearch: false,
    lastArticlesDateTime: new Date(),
  };

  getCheckedIds(options) {
    return options
      .filter((option) => option.checked)
      .map((option) => option.id);
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

    const until = isLoadMore ? this.state.lastArticlesDateTime : "";

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
      const lastArticlesDateTime =
        articles && articles.length
          ? articles[articles.length - 1].publishedAt
          : new Date();

      if (isLoadMore) {
        const oldArticles = [...this.state.articles];

        this.setState({
          isMore,
          lastArticlesDateTime,
          articles: [...oldArticles, ...articles],
        });
      } else {
        this.setState({
          articles,
          isMore,
          lastArticlesDateTime,
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
    const { name, value } = event.target;

    this.setState(
      {
        [name]: value,
      },
      () => {
        if (name !== "query") {
          this.search();
        }
      }
    );
  };

  handleDateChange = (name, value) => {
    this.setState(
      {
        [name]: value,
      },
      () => this.search()
    );
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.search();
  };

  search = async (isLoadMore = false) => {
    const { from, until, query, order, skip } = this.state;
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
      this.setState({
        isError: false,
        skip: newSkipValue,
      });

      const { articles, isMore, total } = await response.json();

      if (isLoadMore) {
        const oldArticles = [...this.state.articles];
        this.setState({
          isMore,
          didSearch: true,
          total: total,
          articles: [...oldArticles, ...articles],
        });
      } else {
        this.setState({
          articles,
          isMore,
          didSearch: true,
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

  componentDidUpdate(prevProps) {
    if (prevProps === this.props) {
      return;
    }

    const { isSearch, router } = this.props;
    const { categories } = this.props.state;
    const stateWithParams = {};

    Object.entries(router.query).map(([key, value]) => {
      stateWithParams[key] = value;
    });

    this.setState({ ...stateWithParams }, () => {
      if (categories && categories.length) {
        isSearch ? this.search() : this.getArticles();
      }
    });
  }

  render() {
    const {
      articles,
      isMore,
      from,
      until,
      query,
      order,
      total,
      didSearch,
      isLoading,
    } = this.state;

    return (
      <main>
        {this.props.isSearch ? (
          <SearchForm
            from={from}
            until={until}
            query={query}
            total={total}
            order={order}
            didSearch={didSearch}
            isLoading={isLoading}
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
          isLoading={isLoading}
          handleLoadMore={this.handleLoadMore}
        />
      </main>
    );
  }
}

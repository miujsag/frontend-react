import React from "react";
import { getCookie, setCookie, cookieListToArray } from "../utils/cookie";

export const OptionContext = React.createContext();

export class OptionProvider extends React.Component {
  state = {
    categories: [],
    sites: [],
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    const options = [...this.state[name]];
    const index = options.findIndex((option) => option.id === parseInt(value));

    options[index].checked = !options[index].checked;

    const selectedIds = options
      .filter((option) => option.checked)
      .map((option) => option.id);

    setCookie(name, selectedIds);
    this.setState({ [name]: options });
  };

  toggleAll = (event) => {
    const { value } = event.target;
    const options = this.state[value];
    const isAllChecked = options.every((option) => option.checked === true);
    const toggledOptions = options.map((option) => ({
      ...option,
      checked: !isAllChecked,
    }));

    const ids = toggledOptions.map((option) => option.id);

    setCookie(value, ids);
    this.setState({
      [value]: toggledOptions,
    });
  };

  setCheckedOptions = (name, options, cookieIds) => {
    if (options && options.length > 0) {
      if (cookieIds && cookieIds.length > 0) {
        const optionsWithChecked = options.map(function (option) {
          option.checked = cookieIds.includes(option.id);

          return option;
        });

        this.setState({ [name]: optionsWithChecked });
      } else {
        const optionsWithChecked = options.map(function (option) {
          option.checked = true;

          return option;
        });

        const selectedIds = optionsWithChecked
          .filter((option) => option.checked)
          .map((option) => option.id);

        setCookie(name, selectedIds);
        this.setState({ [name]: optionsWithChecked });
      }
    }
  };

  componentDidMount() {
    const { categories, sites } = this.props;
    const siteIdsFromCookie = cookieListToArray(getCookie("sites"));
    const categoryIdsFromCookie = cookieListToArray(getCookie("categories"));

    this.setCheckedOptions("categories", categories, categoryIdsFromCookie);
    this.setCheckedOptions("sites", sites, siteIdsFromCookie);
  }

  render() {
    return (
      <OptionContext.Provider
        value={{
          state: this.state,
          handleChange: this.handleChange,
          toggleAll: this.toggleAll,
        }}
      >
        {this.props.children}
      </OptionContext.Provider>
    );
  }
}

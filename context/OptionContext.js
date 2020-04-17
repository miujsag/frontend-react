import React from "react";

export const OptionContext = React.createContext();

export class OptionProvider extends React.Component {
  state = {
    categories: [],
    sites: []
  };

  handleChange = event => {
    const { name, value } = event.target;
    const options = [...this.state[name]];
    const index = options.findIndex(option => option.id === parseInt(value));

    options[index].checked = !options[index].checked;

    this.setState({ [name]: options });
  };

  toggleAll = event => {
    const { value } = event.target;
    const options = this.state[value];
    const isAllChecked = options.every(option => option.checked === true);
    const toggledOptions = options.map(option => ({
      ...option,
      checked: !isAllChecked
    }));

    this.setState({
      [value]: toggledOptions
    });
  };

  setCheckedOptions = (name, options) => {
    if (options && options.length > 0) {
      const optionsWithChecked = options.map(function(option) {
        option.checked = true;

        return option;
      });

      this.setState({ [name]: optionsWithChecked });
    }
  };

  componentDidMount() {
    const { categories, sites } = this.props;
    this.setCheckedOptions("categories", categories);
    this.setCheckedOptions("sites", sites);
  }

  render() {
    return (
      <OptionContext.Provider
        value={{
          state: this.state,
          handleChange: this.handleChange,
          toggleAll: this.toggleAll
        }}
      >
        {this.props.children}
      </OptionContext.Provider>
    );
  }
}

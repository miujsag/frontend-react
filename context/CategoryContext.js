import React from "react";

export const CategoryContext = React.createContext();

export class CategoryProvider extends React.Component {
  state = {
    categories: []
  };

  handleChange = event => {
    const categoryId = event.target.id.split("-")[1];
    const modifiedCategories = [...this.state.categories];
    const categoryIndex = modifiedCategories.findIndex(
      category => category.id === parseInt(categoryId)
    );

    modifiedCategories[categoryIndex].checked = !modifiedCategories[
      categoryIndex
    ].checked;

    this.setState({ categories: modifiedCategories });
  };

  toggleAll = () => {
    const { categories } = this.state;
    const isAllChecked = categories.every(
      category => category.checked === true
    );
    const toggledCategories = this.state.categories.map(category => ({
      ...category,
      checked: !isAllChecked
    }));

    this.setState({
      categories: toggledCategories
    });
  };

  componentDidMount() {
    const { categories } = this.props;
    if (categories && categories.length > 0) {
      const categoriesWithChecked = categories.map(function(category) {
        category.checked = true;

        return category;
      });

      this.setState({ categories: categoriesWithChecked });
    }
  }

  render() {
    console.log({ context: this.context });
    return (
      <CategoryContext.Provider
        value={{
          state: this.state,
          handleChange: this.handleChange,
          toggleAll: this.toggleAll
        }}
      >
        {this.props.children}
      </CategoryContext.Provider>
    );
  }
}
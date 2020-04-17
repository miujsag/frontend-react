import React from "react";
import Checkbox from "../ui/Checkbox/Checkbox.js";
import { OptionContext } from "../../context/OptionContext";
import "./Categories.css";

function CategoryList(categories, handleChange) {
  return categories.map(category => {
    return (
      <li className="category" key={category.id}>
        <Checkbox
          label={category.name}
          value={category.id}
          name="categories"
          onChange={handleChange}
          checked={category.checked}
        />
      </li>
    );
  });
}

export default function Categories() {
  return (
    <OptionContext.Consumer>
      {context => (
        <ul className="categories inline">
          <li>
            <button
              type="button"
              className="toggle-categories"
              value="categories"
              onClick={context.toggleAll}
            >
              Összes
            </button>
          </li>
          {CategoryList(context.state.categories, context.handleChange)}
        </ul>
      )}
    </OptionContext.Consumer>
  );
}

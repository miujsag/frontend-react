import React from "react";
import Checkbox from "../ui/Checkbox/Checkbox.js";
import { OptionContext } from "../../context/OptionContext";
import "./Sites.css";

function SiteList(sites, handleChange) {
  return sites.map(site => {
    return (
      <li className="site" key={site.id}>
        <Checkbox
          label={site.name}
          value={site.id}
          name="sites"
          onChange={handleChange}
          checked={site.checked}
        />
      </li>
    );
  });
}

export default function Sites() {
  return (
    <OptionContext.Consumer>
      {context => (
        <ul className="sites checkbox-list">
          <li>
            <button
              type="button"
              className="toggle-sites"
              value="sites"
              onClick={context.toggleAll}
            >
              Összes
            </button>
          </li>
          {SiteList(context.state.sites, context.handleChange)}
        </ul>
      )}
    </OptionContext.Consumer>
  );
}

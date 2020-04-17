import React from "react";
import fetch from "isomorphic-unfetch";
import "./index.css";
import { OptionContext, OptionProvider } from "../context/OptionContext";
import { WidgetProvider } from "../context/WidgetContext";
import { SearchProvider } from "../context/SearchContext";
import Header from "../components/Header/Header.js";
import Aside from "../components/Aside/Aside.js";
import Articles from "../components/Articles/Articles.js";
import SearchModal from "../components/SearchModal/SearchModal.js";

export default function Index({ sites, categories, weather, rates, day }) {
  return (
    <div>
      <WidgetProvider weather={weather} rates={rates} day={day}>
        <OptionProvider categories={categories} sites={sites}>
          <SearchProvider>
            <Header />
            <SearchModal />
          </SearchProvider>
          <div className="inline">
            <Aside />
            <OptionContext.Consumer>
              {context => (
                <Articles
                  context={context}
                  categories={context.categories}
                  sites={context.sites}
                />
              )}
            </OptionContext.Consumer>
          </div>
        </OptionProvider>
      </WidgetProvider>
    </div>
  );
}

export async function getStaticProps() {
  console.log("get init");
  const response = await fetch(`http://localhost:4000/api/`);
  const props = await response.json();
  console.log({ props });
  return {
    props
  };
}

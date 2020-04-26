import React from "react";
import fetch from "isomorphic-unfetch";
import "./index.css";
import { OptionContext, OptionProvider } from "../context/OptionContext";
import { WidgetProvider } from "../context/WidgetContext";
import { SearchProvider } from "../context/SearchContext";
import Layout from "./_layout";
import Header from "../components/Header/Header.js";
import Aside from "../components/Aside/Aside.js";
import Articles from "../components/Articles/Articles.js";
import SearchModal from "../components/SearchModal/SearchModal.js";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export default function Index({ sites, categories, weather, rates, day }) {
  return (
    <Layout>
      <WidgetProvider weather={weather} rates={rates} day={day}>
        <OptionProvider categories={categories} sites={sites}>
          <SearchProvider>
            <Header />
            <SearchModal />
          </SearchProvider>
          <div className="inline">
            <Aside />
            <OptionContext.Consumer>
              {(context) => (
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
    </Layout>
  );
}

export async function getStaticProps() {
  console.log("get init");
  const response = await fetch(publicRuntimeConfig.API);
  const props = await response.json();
  console.log({ props });
  return {
    props,
  };
}

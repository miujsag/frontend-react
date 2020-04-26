import fetch from "isomorphic-unfetch";
import "./index.css";
import { OptionContext, OptionProvider } from "../context/OptionContext";
import { WidgetProvider } from "../context/WidgetContext";
import Layout from "./_layout";
import Header from "../components/Header/Header.js";
import Aside from "../components/Aside/Aside.js";
import SearchModal from "../components/SearchModal/SearchModal.js";
import Main from "../components/Main/Main.js";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export default function Search({ sites, categories, weather, rates, day }) {
  return (
    <Layout>
      <WidgetProvider weather={weather} rates={rates} day={day}>
        <OptionProvider categories={categories} sites={sites}>
          <Header isSearchPage={true} />
          <SearchModal />
          <div className="inline">
            <Aside />
            <OptionContext.Consumer>
              {(context) => <Main {...context} isSearch={true} />}
            </OptionContext.Consumer>
          </div>
        </OptionProvider>
      </WidgetProvider>
    </Layout>
  );
}

export async function getStaticProps() {
  const response = await fetch(publicRuntimeConfig.API);
  const props = await response.json();

  return {
    props,
  };
}

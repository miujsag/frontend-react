import fetch from "isomorphic-unfetch";
import { withRouter } from "next/router";
import "./index.css";
import { OptionContext, OptionProvider } from "../context/OptionContext";
import { MenuProvider } from "../context/MenuContext";
import { WidgetProvider } from "../context/WidgetContext";
import Layout from "./_layout";
import Header from "../components/Header/Header.js";
import Aside from "../components/Aside/Aside.js";
import SearchModal from "../components/SearchModal/SearchModal.js";
import Main from "../components/Main/Main.js";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

function Search({ sites, categories, weather, rates, day, router }) {
  return (
    <Layout>
      <WidgetProvider weather={weather} rates={rates} day={day}>
        <OptionProvider categories={categories} sites={sites}>
          <MenuProvider>
            <Header isSearchPage={true} />
            <SearchModal />
            <div className="inline">
              <Aside />
              <OptionContext.Consumer>
                {(context) => (
                  <Main {...context} isSearch={true} router={router} />
                )}
              </OptionContext.Consumer>
            </div>
          </MenuProvider>
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

export default withRouter(Search);

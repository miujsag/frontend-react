import fetch from "isomorphic-unfetch";
import getConfig from "next/config";
import { OptionContext, OptionProvider } from "../context/OptionContext";
import { MenuProvider } from "../context/MenuContext";
import { WidgetProvider } from "../context/WidgetContext";
import Layout from "./_layout";
import Header from "../components/Header/Header.js";
import Aside from "../components/Aside/Aside.js";
import ArticleDetails from "../components/ArticleDetails/ArticleDetails.js";

import "./index.css";

const { publicRuntimeConfig } = getConfig();

function Article({ id, sites, categories, weather, rates, day }) {
  return (
    <Layout>
      <WidgetProvider weather={weather} rates={rates} day={day}>
        <OptionProvider categories={categories} sites={sites}>
          <MenuProvider>
            <Header isSearchPage={true} />
            <div className="inline">
              <Aside />
              <ArticleDetails id={id} />
            </div>
          </MenuProvider>
        </OptionProvider>
      </WidgetProvider>
    </Layout>
  );
}

export async function getStaticProps(context) {
  console.log(context);
  const id = context.query?.id || "";
  const response = await fetch(publicRuntimeConfig.API);
  const props = await response.json();

  return {
    props: { ...props, id },
  };
}

export default Article;

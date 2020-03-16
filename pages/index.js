import React from "react";
import fetch from "isomorphic-unfetch";
import "./index.css";
import { SiteProvider } from "../context/SiteContext";
import { CategoryProvider } from "../context/CategoryContext";
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
        <CategoryProvider categories={categories}>
          <SearchProvider>
            <Header />
            <SearchModal />
          </SearchProvider>
          <div className="inline">
            <SiteProvider sites={sites}>
              <Aside />
            </SiteProvider>
            <Articles />
          </div>
        </CategoryProvider>
      </WidgetProvider>
    </div>
  );
}

export async function getStaticProps(context) {
  const response = await fetch(`http://localhost:4000/api/`);
  const props = await response.json();

  return {
    props
  };
}

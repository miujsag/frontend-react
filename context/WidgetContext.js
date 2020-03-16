import React from "react";
import day from "../data/day";
import rates from "../data/rates";
import weather from "../data/weather";

export const WidgetContext = React.createContext({
  day,
  rates,
  weather
});

export function WidgetProvider({ day, weather, rates, children }) {
  return (
    <WidgetContext.Provider
      value={{
        day: day || {},
        weather: weather || {},
        rates: rates || []
      }}
    >
      {children}
    </WidgetContext.Provider>
  );
}

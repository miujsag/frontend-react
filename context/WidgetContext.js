import React from "react";

export const WidgetContext = React.createContext({});

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

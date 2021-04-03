import React from "react";

function round(number) {
  return number ? Math.round(number) : "";
}

export default function Weather({ weather }) {
  return (
    <div className="weather" title={weather.description}>
      <p>{round(weather.current_temperature)}°C</p>
      <img src={`images/weather/${weather.icon}.svg`} alt="időjárás ikon" />
    </div>
  );
}

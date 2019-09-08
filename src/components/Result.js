import React from "react";

const Result = props => {
  const {
    temp,
    pressure,
    city,
    wind_speed,

    main,

    icon,
    country
  } = props.weather;
  const iconSrc = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="Result">
      <img src={iconSrc} alt="icon" />
      <h1 className="main">
        {city} / {country}
      </h1>
      <h2 className="temp result-text">{temp.toFixed(1)} &#176; C</h2>
      <h3 className="result-text">{pressure}hPa</h3>

      <h3 className="result-text">wiatr: {wind_speed}m/s</h3>

      <h3 className="result-text">{main}</h3>
    </div>
  );
};

export default Result;

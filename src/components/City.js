import React from "react";

const City = props => {
  const {icon, city, country, temp, pressure, wind_speed, main} = props.weather;
  const iconSrc = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  return (
    <div className="city">
      <img src={iconSrc} alt="icon" />
      <h1 className="main">
        {city} / {country}
      </h1>
      <h2 className="temp result-text">{temp.toFixed(0)} &#176; C</h2>
      <h3 className="result-text">{pressure}hPa</h3>

      <h3 className="result-text">wiatr: {wind_speed}m/s</h3>

      <h3 className="result-text">{main}</h3>
      <button className="showLongTerm" onClick={props.checkLongTermWeather}>
        Prognoza godzinowa
      </button>
    </div>
  );
};

export default City;

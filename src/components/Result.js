import React from "react";

const Result = props => {
  const {
    temp,
    pressure,
    city,
    max,
    min,
    visibility,
    wind_speed,
    wind_deg,
    clouds,
    main,
    desctription,
    icon,
    country,
    sunrise,
    sunset
  } = props.weather;

  return (
    <div className="Result">
      <h2>Sprawdzasz pogodę w mieście: {city}</h2>
      <h3>Temperatura to: {temp}</h3>
      <h3>Ciśnienie to: {pressure}</h3>
      <h3>
        Max temp:{max} a min to: {min}
      </h3>
      <h3>Widoczność : {visibility}</h3>
      <h3>
        Prędkość wiatru: {wind_speed} oraz {wind_deg}
      </h3>
      <h3>Chmury: {clouds}</h3>
      <h3>
        Main: {main} oraz {desctription}
      </h3>
      <h3>Icon {icon}</h3>
      <h3>Kraj: {country}</h3>
      <h3>
        wschód o: {sunset} zachów {sunrise}
      </h3>{" "}
    </div>
  );
};

export default Result;

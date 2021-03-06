import React from "react";

const Longterm = props => {
  let t = new Date(props.el.dt * 1000);
  let time = t.getHours();
  let icon = props.el.weather[0].icon;
  const iconSrc2 = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="card">
      <div className="img">
        <img src={iconSrc2} alt="" />
      </div>
      <p>{props.el.main.temp.toFixed(0)}&#176; C</p>
      <p className="info-time">{time < 10 ? `0${time}:00` : `${time}:00`} </p>
    </div>
  );
};

export default Longterm;

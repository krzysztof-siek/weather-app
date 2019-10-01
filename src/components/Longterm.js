import React from "react";

const Longterm = props => {
  let t = new Date(props.el.dt * 1000);
  let time = t.getHours();
  console.log(props.el);
  let icon = props.el.weather[0].icon;
  const iconSrc2 = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div class="one">
      <div class="img">
        <img src={iconSrc2} alt="" />
      </div>
      <p>{props.el.main.temp.toFixed(1)}</p>
      <p class="info">{time < 10 ? `0${time}:00` : `${time}:00`} </p>
    </div>
  );
};

export default Longterm;

import React, {Component} from "react";
import Longterm from "./Longterm";

class Result extends Component {
  state = {
    lognTerm: []
  };

  checkLongTermWeather = () => {
    let longTermCity = this.props.weather.city;
    let APIKey = "87f583735f7285d1017d75c8c9331a32";
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${longTermCity}&APPID=${APIKey}&units=metric`
    )
      .then(respond => respond.json())
      .then(json => this.setState({lognTerm: json.list}));
  };

  render() {
    const {
      temp,
      pressure,
      city,
      wind_speed,
      main,
      icon,
      country
    } = this.props.weather;
    const iconSrc = `http://openweathermap.org/img/wn/${icon}@2x.png`;

    let term = "";
    if (this.state.lognTerm.length > 1) {
      term = this.state.lognTerm.slice(0, 10).map(el => <Longterm el={el} />);
    }

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
        <button className="hours" onClick={this.checkLongTermWeather}>
          Prognoza godzinowa
        </button>
        <div class="Longterm">{term}</div>
      </div>
    );
  }
}

export default Result;

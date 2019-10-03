import React, {Component} from "react";
import Longterm from "./Longterm";
import City from "./City";

class Result extends Component {
  state = {
    lognTerm: []
  };

  checkLongTermWeather = () => {
    let longTermCity = this.props.weather.city;
    let APIKey = "87f583735f7285d1017d75c8c9331a32";
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${longTermCity}&APPID=${APIKey}&units=metric`
    )
      .then(respond => respond.json())
      .then(json => this.setState({lognTerm: json.list}));
  };

  render() {
    let term = "";
    if (this.state.lognTerm.length > 1) {
      term = this.state.lognTerm
        .slice(0, 10)
        .map(el => <Longterm el={el} key={el.dt} />);
    }

    return (
      <div className="Result">
        <City
          weather={this.props.weather}
          checkLongTermWeather={this.checkLongTermWeather}
        />
        <div className="Longterm">{term}</div>{" "}
      </div>
    );
  }
}

export default Result;

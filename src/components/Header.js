import React, {Component} from "react";

const APIKey = "87f583735f7285d1017d75c8c9331a32";
class Header extends Component {
  state = {
    input: "",
    err: true,
    weather: []
  };

  weatherRequest = () => {
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.input}&APPID=${APIKey}&units=metric`;
    fetch(API)
      .then(respond => respond.json())
      .then(data => {
        this.setState({
          err: false,
          weather: {
            city: data.name,
            temp: data.main.temp,
            max: data.main.temp_max,
            min: data.main.temp_min,
            pressure: data.main.pressure,
            visibility: data.visibility,
            wind_speed: data.wind.speed,
            wind_deg: data.wind.deg,
            clouds: data.clouds.all,
            main: data.weather[0].main,
            desctription: data.weather[0].description,
            icon: data.weather[0].icon,
            country: data.sys.country,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset
          }
        });
        this.props.check(this.state);
      })
      .catch(err => {
        this.setState({err: true, weather: []});
        this.props.check(this.state);
      });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.input !== this.state.input) {
      this.weatherRequest();
    }
  }

  inputHandler = e => {
    this.setState({input: e.target.value});
  };

  render() {
    return (
      <div className="Header">
        <h1>Aplikacja Pogodowa!</h1>
        <input
          className="Header-input"
          type="text"
          placeholder="Wpisz miasto"
          onChange={this.inputHandler}
        />
      </div>
    );
  }
}

export default Header;

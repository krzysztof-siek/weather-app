import React, {Component} from "react";
import Search from "./Search";

const APIKey = "87f583735f7285d1017d75c8c9331a32";
class Header extends Component {
  state = {
    city: "",
    temp: "",
    pressure: ""
  };

  weatherRequest = () => {
    const API = `http://api.openweathermap.org/data/2.5/weather?q=Poznań&APPID=${APIKey}&units=metric`;
    fetch(API)
      .then(respond => respond.json())
      .then(data => {
        console.log(data);

        this.setState({
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
        });
        this.props.check(this.state);
      });
  };

  render() {
    return (
      <div className="Header">
        <h1>Aplikacja Pogodowa!</h1>
        <button onClick={this.weatherRequest}>Klik</button>
        <Search />
      </div>
    );
  }
}

export default Header;
// export { weatherRequest }

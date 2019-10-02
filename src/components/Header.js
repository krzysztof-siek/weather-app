import React, {Component} from "react";
// import Time from "./Time";

const APIKey = "87f583735f7285d1017d75c8c9331a32";
class Header extends Component {
  state = {
    input: "",
    err: true,
    weather: [],
    hours: "",
    minutes: "",
    seconds: "",
    day: "",
    month: "",
    year: ""
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
        this.props.checkWeather(this.state);
      })
      .catch(err => {
        this.setState({err: true, weather: []});
        this.props.checkWeather(this.state);
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

  getTime = () => {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let day = time.getDay();
    let month = time.getMonth();
    let year = time.getFullYear();
    let monthDay = time.getDate();
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    this.setState({hours, minutes, seconds, day, month, monthDay, year});
  };

  componentDidMount() {
    setInterval(this.getTime, 1000);
  }

  render() {
    const days = [
      "Poniedziałek",
      "Wtorek",
      "Środa",
      "Czwartek",
      "Piątek",
      "Sobota",
      "Niedziela"
    ];
    const months = [
      "Styczeń",
      "Luty",
      "Marzec",
      "Kwiecień",
      "Maj",
      "Czerwiec",
      "Lipiec",
      "Sierpień",
      "Wrzesień",
      "Październik",
      "Listopad",
      "Grudzień"
    ];
    return (
      <div className="Header">
        <div className="time">
          <p>{days[this.state.day]}</p>
          <p>
            {this.state.monthDay} <span> </span>
            {months[this.state.month]}
            {this.state.year}
          </p>
          <p className="hour">
            {this.state.hours}:{this.state.minutes}:{this.state.seconds}
          </p>
        </div>
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

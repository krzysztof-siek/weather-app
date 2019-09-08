import React, {Component} from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import image1 from "./img/1.jpg";
import image2 from "./img/2.jpg";
import image3 from "./img/3.jpg";
import image4 from "./img/4.jpg";
import image5 from "./img/5.jpg";
import image6 from "./img/6.jpg";
import "./styles/App.css";

class App extends Component {
  state = {
    err: true,
    weather: {},
    input: "",
    image: image1
  };
  checkWeather = data => {
    console.log(data.input);
    this.setState({input: data.input});

    if (!data.err) {
      this.setState({weather: data.weather, err: false});
      this.changeImage();
    } else {
      this.setState({
        weather: [],
        err: true
      });
    }
  };

  changeImage = () => {
    if (this.state.weather.main === "Rain") {
      this.setState({image: image3});
    } else if (this.state.weather.main === "Clouds") {
      this.setState({image: image2});
    } else if (this.state.weather.main === "Clear") {
      this.setState({image: image6});
    } else if (this.state.weather.main === "Thunderstorm") {
      this.setState({image: image4});
    } else if (this.state.weather.main === "Snow") {
      this.setState({image: image5});
    } else {
      this.setState({image: image1});
    }
  };

  render() {
    return (
      <div
        className="App"
        style={{backgroundImage: `url(${this.state.image})`}}>
        <Header check={this.checkWeather} />
        {this.state.err ? (
          <h2>Brak danych </h2>
        ) : (
          <Result weather={this.state.weather} />
        )}
      </div>
    );
  }
}

export default App;

import React, {Component} from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import image1 from "./img/1.jpg";
import "./styles/App.css";
import ChangeImage from "./components/ChangeImage";

class App extends Component {
  state = {
    err: true,
    weather: {},
    input: "",
    image: image1
  };
  checkWeather = data => {
    this.setState({input: data.input});

    if (!data.err) {
      this.setState({weather: data.weather, err: false});
      let image = ChangeImage(this.state.weather.main);
      this.setState({image});
    } else {
      this.setState({
        weather: [],
        err: true
      });
    }
  };

  render() {
    let bgc = {backgroundImage: `url(${this.state.image})`};
    return (
      <div className="App" style={bgc}>
        <Header checkWeather={this.checkWeather} />

        {this.state.err ? (
          <h2>Wprowadz miasto </h2>
        ) : (
          <Result weather={this.state.weather} />
        )}
      </div>
    );
  }
}

export default App;

import React, {Component} from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import test from "./components/test";
import image1 from "./img/1.jpg";
import "./styles/App.css";

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
      let testRes = test(this.state.weather.main);
      this.setState({image: testRes});
    } else {
      this.setState({
        weather: [],
        err: true
      });
    }
  };

  render() {
    return (
      <div
        className="App"
        style={{backgroundImage: `url(${this.state.image})`}}>
        <Header checkWeather={this.checkWeather} />
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

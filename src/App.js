import React, {Component} from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import Aside from "./components/Aside";
import "./styles/App.css";

class App extends Component {
  state = {
    weather: []
  };
  checkWeather = data => {
    this.setState({weather: data});
  };

  render() {
    return (
      <div className="App">
        <Header check={this.checkWeather} />
        <Aside />
        <Result weather={this.state.weather} />
      </div>
    );
  }
}

export default App;

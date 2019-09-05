import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Result from "./components/Result";
import Aside from "./components/Aside";
import "./styles/App.css";

function App() {
  return (
    <div class="App">
      <h1>Welcome from App</h1>
      <Header />
      <Aside />
      <Search />
      <Result />
    </div>
  );
}

export default App;

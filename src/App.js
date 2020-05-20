import React, { Component } from "react";
import "./App.css";
import initDataManager, {stampCollection} from "./DataManager";
import MainWindow from "./MainWindow";

class App extends Component {
  render() {
    initDataManager()
    return (
      <div className="container">
        <MainWindow stampCollection = {stampCollection}/>
      </div>
    );
  }
}

export default App;

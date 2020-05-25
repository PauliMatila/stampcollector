import React, { Component } from "react";
import { BrowserRouter as Router,Route } from 'react-router-dom';
import "./App.css";
import DataManager from "./DataManager";
import MainWindow from "./MainWindow";
import Summary from './pages/Summary';
import AddStamp from './pages/AddStamp';
import About from './pages/About';
import Header from "./Header";

class App extends Component {
  render() {
    DataManager.initDataManager()
    return (
      <Router>
        <div className="container">
          <Header/>
          <Route exact path="/" render={props => (
            <React.Fragment>
              <MainWindow stampCollection = {DataManager.stampCollection}/>
            </React.Fragment>
          )} />
          <Route path="/summary" component={Summary}/>
          <Route path="/addStamp" component={AddStamp}/>
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;

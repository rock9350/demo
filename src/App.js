import React, { Component, useState } from "react";
import "./App.css";
import Navbar from "./component/navbar";
import Card from "./component/usercard";


class App extends Component {

  
  render() {
   
    return (
      <div className="App">
        <> 
        <div>
          00111
        </div>
        </>
        <Navbar onGet={this.onGet} loader={this.loader}/>
        <Card Data={this.state.data} status={this.state.status}/>
      </div>
    );
  }
}

export default App;

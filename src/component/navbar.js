import React, { Component } from "react";
import "./navbar.css";
import axios from "axios";

class Navbar extends Component {
  getData = async () => {
    this.props.loader(false);
    const response = await axios.get("https://reqres.in/api/users?page=1");
       this.props.onGet(response);
       this.props.loader(true);
  };

  render() {
    return (
      <div id="navbar">
        <button onClick={this.getData}>Get Users</button>
      </div>

    );
  }
}

export default Navbar;

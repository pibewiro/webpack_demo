import React, { Component } from "react";
import App3 from "./App3.jsx";
import axios from "axios";
import imgee from "../assets/logo.png";

export default class App2 extends Component {
  async componentDidMount() {
    const response = await axios.get(`${process.env.API_ROOT}/product`);
  }
  render() {
    return (
      <div>
        <App3 />
        <h2>App2utyryur</h2>
        <img src={imgee} />
      </div>
    );
  }
}

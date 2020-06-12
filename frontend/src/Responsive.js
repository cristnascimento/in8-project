import React, { Component } from "react";

import "./css/styles_responsive.css"

class Responsive extends Component {
  constructor() {
    super()
  }

  componentWillMount() {
    this.getData()
  }

  getData () {
     var x = document.getElementById("myTopnav");
     if (x.className === "navigation-bar") {
       x.className += " responsive";
     } else {
       x.className = "navigation-bar";
     }
  }
}

export default Responsive;

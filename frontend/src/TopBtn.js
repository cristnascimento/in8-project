import React, { Component } from "react";

import "./css/styles_topbtn.css"

class TopBtn extends Component {

   constructor() {
      super();
      this.mybuttonref = React.createRef();
      this.state = {};
      // When the user scrolls down 20px from the top of the document, show the button
      window.onscroll = this.scrollFunction.bind(this);
   }

   scrollFunction() {
      this.mybutton = this.mybuttonref.current;
      if ((document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) && window.innerWidth > 1200) {
       this.mybutton.style.display = "block";
      } else {
        this.mybutton.style.display = "none";
      }
      this.setState(this.state);
   }

   // When the user clicks on the button, scroll to the top of the document
   topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
   } 

  render() {
    return ( 
      <button ref={this.mybuttonref} onClick={this.topFunction.bind(this)} id="myBtn" title="Go to top"></button> 
    );
  }
}

export default TopBtn;

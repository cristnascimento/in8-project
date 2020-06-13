import React, { Component } from "react";

import "./css/styles_header.css"

class Header extends Component {

  myFunction () {
     var x = document.getElementById("myTopnav");
     if (x.classNameName === "navigation-bar") {
       x.classNameName += " responsive";
     } else {
       x.classNameName = "navigation-bar";
     }
  }

  render() {
    return ( 
     <div className="header">
      <nav className="navigation-bar" id="myTopnav">
         <a href="" className="icon" onClick={this.myFunction.bind(this)}>
            <img className="drop_icon" src="./icones/hamburguer.svg" alt=""/>
	    <img className="drop_icon_aberto" src="./icones/hamburguer-aberto0.svg" alt=""/>
	 </a>
         <img className="logo" src="./imagens/logo-in8-dev.svg" alt=""/>
         <a href="#"></a>
         <a href="#"></a>
         <a href="#"></a>
         <a href="#">sobre mim</a>
         <a href="#">lista</a>
         <a href="#">cadastro</a>
      </nav>

      <div className="titulo">
         <span className="estagio">ESTÁGIO</span>
         <span className="selecao">PROVA DE SELEÇÃO</span>
      </div>
   </div>
    );
  }
}

export default Header;

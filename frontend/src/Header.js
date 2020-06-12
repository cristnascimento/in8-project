import React, { Component } from "react";

import "./css/styles_header.css"

class Header extends Component {

  myFunction () {
     var x = document.getElementById("myTopnav");
     if (x.className === "navigation-bar") {
       x.className += " responsive";
     } else {
       x.className = "navigation-bar";
     }
  }

  render() {
    return ( 
     <div class="header">
      <nav class="navigation-bar" id="myTopnav">
         <a href="javascript:void(0);" class="icon" onClick={this.myFunction.bind(this)}>
            <img class="drop_icon" src="./icones/hamburguer.svg"/>
	    <img class="drop_icon_aberto" src="./icones/hamburguer-aberto0.svg"/>
	 </a>
         <img class="logo" src="./imagens/logo-in8-dev.svg" />
         <a href="#"></a>
         <a href="#"></a>
         <a href="#"></a>
         <a href="#">sobre mim</a>
         <a href="#">lista</a>
         <a href="#">cadastro</a>
      </nav>

      <div class="titulo">
         <span class="estagio">ESTÁGIO</span>
         <span class="selecao">PROVA DE SELEÇÃO</span>
      </div>
   </div>
    );
  }
}

export default Header;

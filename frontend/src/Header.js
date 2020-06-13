import React, { Component } from "react";

import "./css/styles_header.css"

class Header extends Component {

  abrir_menu () {
     var x = document.getElementById("myTopnav");
     if (x.className === "navigation-bar") {
       x.className += " responsive";
     } else {
       x.className = "navigation-bar";
     }
  }

  render() {
    return ( 
     <div className="header">
      <nav className="navigation-bar" id="myTopnav">
         <img className="icon drop_icon" src="./icones/hamburguer.svg" alt="" onClick={this.abrir_menu.bind(this)}/>
	 <img className="icon drop_icon_aberto" src="./icones/hamburguer-aberto0.svg" alt="" onClick={this.abrir_menu.bind(this)}/>
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

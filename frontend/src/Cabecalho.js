import React, { Component } from "react";

import "./css/styles_cabecalho.css"

class Cabecalho extends Component {

  abrir_menu () {
     var x = document.getElementById("menu_01");
     if (x.className === "cabecalho_menu") {
       x.className += " responsive";
     } else {
       x.className = "cabecalho_menu";
     }
  }

  render() {
    return ( 
     <div className="cabecalho_secao">
      <nav className="cabecalho_menu" id="menu_01">
         <img className="cabecalho_icon drop_icon_fechado" src="./icones/hamburguer.svg" alt="" onClick={this.abrir_menu.bind(this)}/>
	 <img className="cabecalho_icon drop_icon_aberto" src="./icones/hamburguer-aberto0.svg" alt="" onClick={this.abrir_menu.bind(this)}/>
         <img className="cabecalho_logo" src="./imagens/logo-in8-dev.svg" alt=""/>
         <a href="#"></a>
         <a href="#"></a>
         <a href="#"></a>
         <a href="#">sobre mim</a>
         <a href="#">lista</a>
         <a href="#">cadastro</a>
      </nav>

      <div className="cabecalho_titulo">
         <span className="cabecalho_estagio">ESTÁGIO</span>
         <span className="cabecalho_selecao">PROVA DE SELEÇÃO</span>
      </div>
   </div>
    );
  }
}

export default Cabecalho;

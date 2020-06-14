import React, { Component } from "react";

import "./css/styles_rodape.css"

class Rodape extends Component {
  render() {
    return ( 
   <div className="bottom">
      <div className="bottom_informacoes">
         <span className="bottom_nome">Fulano Beltrano de Oliveira da Silva</span>
         <span className="bottom_email">fulanobos@gmail.com</span>
	 <span className="bottom_telefone">(31) 98765 4321</span>
         <span className="bottom_nascimento">Faculdade de Belo Horizonte</span>
      </div>
   </div>
    );
  }
}

export default Rodape;

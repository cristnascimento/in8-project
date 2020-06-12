import React, { Component } from "react";

import "./css/styles_footer.css"

class Footer extends Component {
  render() {
    return ( 
   <div class="bottom">
      <div class="bottom_informacoes">
         <span class="bottom_nome">Fulano Beltrano de Oliveira da Silva</span>
         <span class="bottom_email">fulanobos@gmail.com</span>
	 <span class="bottom_telefone">(31) 98765 4321</span>
         <span class="bottom_nascimento">Faculdade de Belo Horizonte</span>
      </div>
   </div>
    );
  }
}

export default Footer;

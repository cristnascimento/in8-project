import React, { Component } from "react";

import "./css/styles_cadastrar.css"

class Cadastrar extends Component {

   salvar_cadastro(cadastro) {
      var xhr = new XMLHttpRequest()

      xhr.open('POST', 'http://192.168.15.3:8000/insert');
      xhr.setRequestHeader("Content-Type", "application/json");

      xhr.onreadystatechange = function () {
	 if (xhr.readyState === 4 && (xhr.status === 200)) {
	    console.log("Cadastro salvo.");
	 }
      };

      var data = JSON.stringify(cadastro);
      xhr.send(data)
   }

   enviar_dados() {
      var form_cadastrar = document.getElementsByClassName("cadastrar_form");
   
      var cadastro = {};
      for ( var i = 0; i < form_cadastrar[0].elements.length; i++ ) {
         var e = form_cadastrar[0].elements[i];
         cadastro[e.name] = e.value;
      }

      this.props.updateParent([cadastro]);
      this.salvar_cadastro(cadastro);
   }

  render() {
    return ( 
   <div className="secao_cadastrar">
      <div className="cadastrar_grupo">
	 <div  className="cadastrar_titulo">
            <span>CADASTRO</span>
         </div>

         <form className="cadastrar_form" action="" method="post">
            <label>Name</label>
            <input type="text" name="nome" />

            <label>E-mail</label>
            <input type="text" name="email" />

            <label>Nascimento</label>
            <input type="text" name="nascimento" />

            <label>Telefone</label>
            <input type="text" name="telefone" />

            <input type="button" value="CADASTRAR" onClick={this.enviar_dados.bind(this)} />
         </form>
      </div>
   </div>   
    );
  }
}

export default Cadastrar;

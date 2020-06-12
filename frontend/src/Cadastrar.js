import React, { Component } from "react";
import Visualizar, { preencher_html } from './Visualizar'

import "./css/styles_cadastrar.css"

class Cadastrar extends Component {

   salvar_cadastro(cadastro) {
      var xhr = new XMLHttpRequest()

      xhr.open('POST', 'http://127.0.0.1:8000/insert');
      xhr.setRequestHeader("Content-Type", "application/json");

      xhr.onreadystatechange = function () {
	 if (xhr.readyState == 4 && (xhr.status == 200)) {
            var json = JSON.parse(xhr.responseText);
            console.log("status: " + json.status);
	 }
      };

      console.log("Enviando...");
      var data = JSON.stringify(cadastro);
      xhr.send(data)
   }

   enviar_dados() {
      var form_cadastrar = document.getElementsByClassName("form_cadastrar");
   
      var cadastro = {};
      for ( var i = 0; i < form_cadastrar[0].elements.length; i++ ) {
         var e = form_cadastrar[0].elements[i];
         cadastro[e.name] = e.value;
      }

      var data = [cadastro];
      preencher_html(data);
      this.salvar_cadastro(cadastro);
   }

  render() {
    return ( 
   <div class="cadastrar">
      <div class="grupo_cadastrar">
	 <div  class="titulo_cadastrar">
            <span>CADASTRO</span>
         </div>

         <form class="form_cadastrar" action="" method="post">
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

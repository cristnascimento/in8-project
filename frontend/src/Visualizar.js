import React, { Component } from "react";

import "./css/styles_visualizar_desktop.css"
import "./css/styles_visualizar_mobile.css"

export function preencher_html(cadastros) {

}

class Visualizar extends Component {

   constructor() {
      super();
      this.state = { cadastros: [] };
      this.preencher_automatico();
   }

   abrir_tab (evt, aba_num) {
      var i, conteudo, aba;

      conteudo = document.getElementsByClassName("conteudo");
      for (i = 0; i < conteudo.length; i++) {
        conteudo[i].style.display = "none";
      }

      aba = document.getElementsByClassName("btn_aba");
      for (i = 0; i < aba.length; i++) {
        aba[i].className = aba[i].className.replace(" active", "");
      }

      document.getElementById(aba_num).style.display = "table";
      evt.currentTarget.className += " active";
      console.log("class= "+evt.currentTarget.className);
   }

   preencher_automatico() {
      var xhr = new XMLHttpRequest()
      xhr.open('GET', 'http://192.168.15.3:8000/list');
      xhr.setRequestHeader("Content-Type", "application/json");
      var obj = this;	

      xhr.onreadystatechange = function () {
	 if (xhr.readyState === 4 && (xhr.status === 200)) {
            var json = JSON.parse(xhr.responseText);
	    obj.props.change_state(json);
	 }
      };
      xhr.send()
   }

  render() {
    return ( 
      <div className="secao_visualizar">
         <div className="visualizar_desktop">
           <div  className="visualizar_titulo">
             <span>LISTA DE CADASTRO</span>
           </div>

           <table className="tabela_desktop">
	     <thead>
	     <tr>
	 	<th></th><th>NOME</th><th>E-MAIL</th><th>NASCIMENTO</th><th>TELEFONE</th>
	     </tr>
	    </thead>
	     <tbody>
	     {this.props.cadastros.map ( (item) => (
                   <tr key={"row_"+item.row_num.toString()}>
		     <td key={"col_"+item.row_num.toString()}>{item.row_num}</td>
                     <td>{item.nome}</td>
                     <td>{item.email}</td>
                     <td>{item.nascimento}</td>
                     <td>{item.telefone}</td>
                   </tr>
	     ))}
	     </tbody>
           </table>
          </div>
	
         <div className="visualizar_mobile"> 
	    <div className="visualizar_aba">
	     {this.props.cadastros.map ( (item) => (
                  <button className="btn_aba" key={"btn_"+item.row_num.toString()}
		          onClick={ event => this.abrir_tab(event, "conteudo_"+item.row_num.toString())}>
		          {item.row_num}
		  </button>
	     ))}
	    </div>

	    <div className="visualizar_conteudo">
	    {this.props.cadastros.map ( (item) => (
            <div className='conteudo' id={"conteudo_"+item.row_num.toString()} key={"conteudo_"+item.row_num.toString()}>
              <table className="tabela_mobile">
		    <tbody>
                     <tr key={"mrow_nome_"+item.row_num.toString()}><td className="rotulo">NOME</td><td className="info">{item.nome}</td></tr>
                     <tr key={"mrow_email_"+item.row_num.toString()}><td className="rotulo">EMAIL</td><td className="info">{item.email}</td></tr>
                     <tr key={"mrow_nasc_"+item.row_num.toString()}><td className="rotulo">NASC.</td><td className="info">{item.nascimento}</td></tr>
                     <tr key={"mrow_tel_"+item.row_num.toString()}><td className="rotulo">TEL.</td><td className="info">{item.telefone}</td></tr>
		    </tbody>
              </table>
            </div>
            ))}
	    </div>
	 </div>
     </div>
    );
  }
}

export default Visualizar;

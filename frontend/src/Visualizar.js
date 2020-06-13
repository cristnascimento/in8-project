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

   abrir_tab (evt, cityName) {
      var i, tabcontent, tablinks;

      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }

      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }

      document.getElementById(cityName).style.display = "table";
      evt.currentTarget.className += " active";
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
      <div className="table">
         <div className="table_internal">
           <div  className="titulo_lista">
             <span>LISTA DE CADASTRO</span>
           </div>

           <table className="table_desktop">
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
	
         <div className="tab_section"> 
	    <div className="tab">
	     {this.props.cadastros.map ( (item) => (
                  <button key={"btn_"+item.row_num.toString()} className="tablinks" onClick={ () => this.abrir_tab(event, "tabcontent_"+item.row_num.toString())}>{item.row_num}</button>
	     ))}
	    </div>

	    {this.props.cadastros.map ( (item) => (
            <div id={"tabcontent_"+item.row_num.toString()} key={"tabcontent_"+item.row_num.toString()} className='tabcontent'>
              <table className="table_mobile">
		    <tbody>
                     <tr key={"mrow_nome_"+item.row_num.toString()}><td className="label">NOME</td><td className="content">{item.nome}</td></tr>
                     <tr key={"mrow_email_"+item.row_num.toString()}><td className="label">EMAIL</td><td className="content">{item.email}</td></tr>
                     <tr key={"mrow_nasc_"+item.row_num.toString()}><td className="label">NASC.</td><td className="content">{item.nascimento}</td></tr>
                     <tr key={"mrow_tel_"+item.row_num.toString()}><td className="label">TEL.</td><td className="content">{item.telefone}</td></tr>
		    </tbody>
              </table>
            </div>
            ))}
	 </div>
     </div>
    );
  }
}

export default Visualizar;

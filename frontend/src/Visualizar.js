import React, { Component } from "react";

import "./css/styles_visualizar_desktop.css"
import "./css/styles_visualizar_mobile.css"

export function preencher_html(cadastros) {

      var tab_mobile = document.getElementsByClassName("tab"); //.style.display = "table";
      var tab_section = document.getElementsByClassName("tab_section");
      var table_desktop = document.getElementsByClassName("table_desktop");
      var rows = table_desktop[0].rows.length;
      console.log("Preenchendo automatico.....");
      for (var i = 0; i < cadastros.length; i++) {
         var row_num = rows + i;
         console.log("row-num: "+ row_num);
         var new_tab = "<button class=\"tablinks\" onclick=\"openCity(event, 'tabcontent_"+row_num.toString()+"')\">"+row_num.toString()+"</button>";
	
         // insert new tab
         tab_mobile[0].innerHTML += new_tab;
      
         var new_content = ""
         new_content += "<div id='tabcontent_"+row_num.toString()+"' class='tabcontent'>";
         new_content += "     <table class=\"table_mobile\">";
         new_content += "            <tr><td class=\"label\">NOME</td><td class=\"content\">"+cadastros[i].nome+"</td></tr>";
         new_content += "            <tr><td class=\"label\">EMAIL</td><td class=\"content\">"+cadastros[i].email+"</td></tr>";
         new_content += "            <tr><td class=\"label\">NASC.</td><td class=\"content\">"+cadastros[i].nascimento+"</td></tr>";
         new_content += "            <tr><td class=\"label\">TEL.</td><td class=\"content\">"+cadastros[i].telefone+"</td></tr>";
         new_content += "     </table>";
         new_content += "</div>";

         // insert new tab
         tab_section[0].innerHTML += new_content;

         var new_row = "";
         new_row += "<tr><td>"+row_num.toString()+"</td>";
         new_row += "<td>"+cadastros[i].nome+"</td>";
         new_row += "<td>"+cadastros[i].email+"</td>";
         new_row += "<td>"+cadastros[i].nascimento+"</td>";
         new_row += "<td>"+cadastros[i].telefone+"</td></tr>";

         // insert new row 	   
         table_desktop[0].innerHTML += new_row;
      }
}

class Visualizar extends Component {

  openCity (evt, cityName) {
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
    xhr.open('GET', 'http://127.0.0.1:8000/list');
    xhr.setRequestHeader("Content-Type", "application/json");
	
    xhr.onreadystatechange = function () {
	 if (xhr.readyState == 4 && (xhr.status == 200)) {
            var json = JSON.parse(xhr.responseText);
	    preencher_html(json);
	 }
    };

    xhr.send()
   }


  render() {
    return ( 
      <div class="table">
         <div class="table_internal">
           <div  class="titulo_lista">
             <span>LISTA DE CADASTRO</span>
           </div>

           <table class="table_desktop">
	     <tr>
	 	<th></th><th>NOME</th><th>E-MAIL</th><th>NASCIMENTO</th><th>TELEFONE</th>
	     </tr>
           </table>
          </div>
	
         <div class="tab_section"> <div class="tab"></div> </div>

         {this.preencher_automatico()}
     </div>
    );
  }
}

export default Visualizar;

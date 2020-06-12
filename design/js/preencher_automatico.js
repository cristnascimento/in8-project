
function preencher_html(cadastros) {

   var tab_mobile = document.getElementsByClassName("tab"); //.style.display = "table";
   var tab_section = document.getElementsByClassName("tab_section");
   var table_desktop = document.getElementsByClassName("table_desktop");
   var rows = table_desktop[0].rows.length;

   for (var i = 0; i < cadastros.length; i++) {
      var row_num = rows + i;
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

var meus_cadastros = [{"nome": "Fulano Oliveira Santos" , "email": "fulano@gmail.com", "nascimento": "10/09/1992", "telefone": "(31) 98765 4321"},
                      {"nome": "Beltrano da Silva Gongalez" , "email": "beltrano@gmail.com", "nascimento": "10/09/1987", "telefone": "(31) 98765 4321"},
                      {"nome": "Ciclano Pereira Moreira" , "email": "ciclano@gmail.com", "nascimento": "03/06/1999", "telefone": "(31) 98765 4321"},
                      {"nome": "Teltrano Franscido Borba Júnior" , "email": "teltrano@gmail.com", "nascimento": "20/03/1982", "telefone": "(31) 98765 4321"}];

//preencher_html(meus_cadastros);

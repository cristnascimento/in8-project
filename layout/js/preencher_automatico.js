
function preencher_automatico(cadastros) {

   var tab_mobile = document.getElementsByClassName("tab"); //.style.display = "table";
   var tab_section = document.getElementsByClassName("tab_section");

   for (var i = 0; i < cadastros.length; i++) {
      var new_tab = "<button class=\"tablinks\" onclick=\"openCity(event, 'tabcontent_"+i.toString()+"')\">"+i.toString()+"</button>";
	
      // insert new tab
      tab_mobile[0].innerHTML += new_tab;
      
      var new_content = ""
      new_content += "<div id='tabcontent_"+i.toString()+"' class='tabcontent'>";
      new_content += "     <table class=\"table_mobile\">";
      new_content += "            <tr><td class=\"label\">NOME</td><td class=\"content\">"+cadastros[i].nome+"</td></tr>";
      new_content += "            <tr><td class=\"label\">EMAIL</td><td class=\"content\">"+cadastros[i].email+"</td></tr>";
      new_content += "            <tr><td class=\"label\">NASC.</td><td class=\"content\">"+cadastros[i].nascimento+"</td></tr>";
      new_content += "            <tr><td class=\"label\">TEL.</td><td class=\"content\">"+cadastros[i].telefone+"</td></tr>";
      new_content += "     </table>";
      new_content += "</div>";

      // insert new tab
      tab_section[0].innerHTML += new_content;
   }
}

var meus_cadastros = [{"nome": "Fulano" , "email": "fulano@gmail.com", "nascimento": "10/09/1992", "telefone": "(31) 98765 4321"},
                      {"nome": "Beltrano" , "email": "fulano@gmail.com", "nascimento": "10/09/1992", "telefone": "(31) 98765 4321"},
                      {"nome": "Ciclano" , "email": "fulano@gmail.com", "nascimento": "10/09/1992", "telefone": "(31) 98765 4321"},
                      {"nome": "Teltrano" , "email": "fulano@gmail.com", "nascimento": "10/09/1992", "telefone": "(31) 98765 4321"}];

preencher_automatico(meus_cadastros);

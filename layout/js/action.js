
function enviar_dados() {
   console.log("enviando dados...");
   var form_cadastrar = document.getElementsByClassName("form_cadastrar");
   
   var cadastro = {};
   for ( var i = 0; i < form_cadastrar[0].elements.length; i++ ) {
      var e = form_cadastrar[0].elements[i];
      cadastro[e.name] = e.value;
   }
   console.log("Nome: "+cadastro.nome);
   console.log("Campos: "+Object.keys(cadastro).length);
   var data = [cadastro];
   preencher_automatico(data);
}


function salvar_cadastro(cadastro) {
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

function preencher_automatico() {
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

function enviar_dados() {
   var form_cadastrar = document.getElementsByClassName("form_cadastrar");
   
   var cadastro = {};
   for ( var i = 0; i < form_cadastrar[0].elements.length; i++ ) {
      var e = form_cadastrar[0].elements[i];
      cadastro[e.name] = e.value;
   }
   var data = [cadastro];
   preencher_html(data);
   salvar_cadastro(cadastro);
}

preencher_automatico();

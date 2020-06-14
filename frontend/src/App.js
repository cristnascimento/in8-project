import React, {Component} from 'react';

import Cabecalho from "./Cabecalho";
import Cadastrar from "./Cadastrar";
import Visualizar from "./Visualizar";
import Rodape from "./Rodape";

import { Container } from "./styles"

import "./css/styles_fonts.css"

class App extends Component {

   constructor(props) {
      super(props);
      this.state = {
           cadastros: []
      };
    }

   change_state (novos_cadastros) {
      var new_state = null;

      for (var i = 0; i < novos_cadastros.length; i++) {
         novos_cadastros[i].row_num = this.state.cadastros.length + i + 1;
      }


      if (this.state.cadastros.length === 0) {
         new_state = novos_cadastros;
      }
      else {
         new_state = this.state.cadastros.concat(novos_cadastros);
      }

      this.setState({cadastros: new_state});
   }

   render() {
     return (
	<Container>
	   <Cabecalho />
	   <Cadastrar updateParent={ this.change_state.bind(this) } />
	   <Visualizar change_state={ this.change_state.bind(this) }
	               cadastros={this.state.cadastros}/>
	   <Rodape />
	</Container>
     );
   }
}

export default App;

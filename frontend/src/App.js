import React, {Component} from 'react';
import {
  Route,
  HashRouter
} from "react-router-dom";

import Home from "./Home";
import Cabecalho from "./Cabecalho";
import Cadastrar from "./Cadastrar";
import Visualizar from "./Visualizar";
import Rodape from "./Rodape";

import { Container } from "./styles"

import "./css/styles_fonts.css"

class App extends Component {

   render() {
     return (
	<HashRouter>
	<Container>

	   <Cabecalho />
	   <Route path="/" component={Home}/>
	   <Route path="/cadastro" component={Cadastrar}/>
	   <Route path="/lista" component={Visualizar}/>
	   <Route path="/sobre" component={Rodape}/>
	</Container>
	</HashRouter>
     );
   }
}

export default App;

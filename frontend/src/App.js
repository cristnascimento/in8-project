import React, {Component} from 'react';

import Header from "./Header";
import Cadastrar from "./Cadastrar";
import Visualizar from "./Visualizar";
import Footer from "./Footer";
import Responsive from "./Responsive";

import { Container } from "./styles"

import "./css/styles_fonts.css"

class App extends Component {
   render() {
     return (
	<Container>
	   <Header />
	   <Cadastrar />
	   <Visualizar />
	   <Footer />
	</Container>
     );
   }
}

export default App;

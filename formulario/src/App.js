import React, { Component } from "react";
import ListaDeNotas from "./componentes/listaDeNotas/ListaDeNotas.jsx";
// import FormularioCadastro from "./componentes/formularioCadastro";
import "./assets/App.css";
import './assets/index.css';
import { FormularioCadastro } from "./componentes/formularioCadastro/FormularioCadastro.jsx";
class App extends Component {

  constructor(){
    super();

    this.state = {
      notas:[]
    }
  }

  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas,novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado)
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.state.notas}/>
      </section>
    );
  }
}

//new ListaDeNotas({notas:this.notas})
export default App;
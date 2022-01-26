import React, { Component } from "react"
import './ListaDeNotas.css'
import CardNotas from "../cardNotas/CardNota";

class ListaDeNotas extends Component {
	render() {
		return (
		<ul className="lista-notas">
			{this.props.notas.map((notas, index) => {
				return(
					<li className="lista-notas_item" Key={index}>
						<CardNotas titulo ={notas.titulo} texto={notas.texto}/>
					</li>
				);
			})}
		</ul>
		);
	}
}

export default ListaDeNotas;
import React, { Component } from 'react';
import './index.css';
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>

export default class PersonInfo extends Component {
	render() {
		return (
			<div className="estilo">
				<img src="DSC_2209.JPG" className="image"/>
				<h1 className="name">Camila Firpo </h1>
				<h3>Auxiliar Contable</h3>
				<br/>
				<div className="data">
					<p>Celular: 099094726</p>
					<p>Correo electrónico: camilafirpo2294@hotmail.com</p>
					<p>Dirección: Samuel Blixen 4375</p>
				</div>
				{/* <LinkedInIcon/>
				<button className="button">LinkedInIcon</button> */}
			</div>)
	}
}

import React, { Component } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './index.css';

export default class PersonInfo extends Component {
	render() {
		return (
			<div className="estilo">
				<img src="images/ProfilePicture.jpg" className="image"/>
				<h1 className="name">Camila Firpo </h1>
				<br/>
				<div className="data">
				<Typography variant="body1"	>
					Cellphone: 099094726			
				</Typography>
				<Typography variant="body1"	>
					E-mail: camilafirpo2294@hotmail.com
				</Typography>
					<LocationOnIcon/>
					<Typography variant="body1"	>
  						Home address: Malvin, Montevideo
					</Typography>
					<Link href="https://www.linkedin.com/in/camila-firpo/" target="_blank">
						<LinkedInIcon />
					</Link>
					<br/>
					<Link href="https://github.com/camila-firpo" target="_blank">
						<GitHubIcon />
					</Link>
								
				</div>
				
			</div>)
	}
}

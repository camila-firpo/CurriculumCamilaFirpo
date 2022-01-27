import React, { Component } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

export default class PersonInfo extends Component {
	render() {
		return (
			<Box sx={{
				textAlign: 'center',
				height: '100vh',
				background: '#127384'}}>			
				<Box sx={{display: 'flex', justifyContent: 'center', py: 1}}>
					<Avatar src="images/ProfilePicture.jpg" sx={{width: 200, height: 200}}/>
				</Box>
				<Box sx={{display: 'inline-block', justifyContent: 'center'}}>
					<Box sx={{marginBottom: 1}}>
						<Typography variant="h4">Camila Firpo </Typography>
					</Box>
					<Box sx={{ display: 'flex', marginBottom: 1 }} >
						<Box sx={{marginRight: 1}}>
							<LocalPhoneIcon />
						</Box>
						<Typography variant="body1"	>
							099094726			
						</Typography>
					</Box>
					<Box sx={{ display: 'flex', marginBottom: 1 }} >
						<Box sx={{marginRight: 1}}>
							<EmailIcon/>
						</Box>
						<Typography variant="body1"	>
							camilafirpo2294@hotmail.com
						</Typography>
					</Box>
					<Box sx={{ display: 'flex', marginBottom: 1 }} >
						<Box sx={{marginRight: 1}}>
							<LocationOnIcon/>
						</Box>
						<Typography variant="body1"	>
							Malvin, Montevideo
						</Typography>
					</Box>
					<Box sx={{ display: 'flex', marginBottom: 1 }} >
						<Box sx={{marginRight: 1}}>
							<Link href="https://www.linkedin.com/in/camila-firpo/" target="_blank">
								<LinkedInIcon />
							</Link>					
						</Box>
						<Link href="https://github.com/camila-firpo" target="_blank">
							<GitHubIcon />
						</Link>								
					</Box>
					<Box>
						<Typography variant="h5">
							Perfil Personal
						</Typography>
						<Typography variant="body1">
						Soy estudiante del Tecnólogo en Informática y
						además poseo 3⁄4 de la carrera Licenciatura
						en Economía aprobada. Actualmente me
						encuentro buscando mi primera experiencia
						laboral en el sector de IT. Soy responsable,
						con buena disposición y muchas ganas de
						aprender cosas nuevas.
						</Typography>
					</Box>			
				</Box>				
			</Box>
		)
	}
}

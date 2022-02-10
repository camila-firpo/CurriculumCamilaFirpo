import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Card } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

function Education() {
		return (
			<Card variant="outlined" sx={{my: 3}}>
				<Box sx={{ marginRight: 1, display:'flex', marginTop: 1 }}>
					<Box sx={{ marginRight: 1, padding: 0.5 }}>
						<SchoolIcon sx={{ color:'primary.main'}}/>
					</Box>
						<Typography variant="h4" color="primary">Education</Typography> 
				</Box>
				<Box>
					<Box sx={{ marginBottom: 1, bgcolor:"primary.main", color:"primary.light", p: 1 }}>
						<Typography variant="subtitle2">FING-DGETP-UTEC</Typography>
					</Box>
					<Box sx={{ margin: 1 , padding: 1}}>
						<Typography variant="subtitle1" color="secondary.dark" sx={{marginBottom: 1}}>Information Technologist | 2021 - Present</Typography>
						<Box sx={{margin: 1}}>
							<Typography variant="body1" color="secondary.dark">
							Student with the first year
							completely approved
							</Typography>
						</Box>
					</Box>
				</Box>
				<Box>
					<Box sx={{ marginBottom: 1, bgcolor:"primary.main", color:"primary.light", p: 1 }}>
						<Typography variant="subtitle2">UNIVERSIDAD DE LA REPÚBLICA</Typography>
					</Box>
					<Box sx={{ margin: 1 , padding: 1}}>
						<Typography variant="subtitle1" color="secondary.dark" sx={{marginBottom: 1}}>Bachelor of Economics | 2014 - Paused</Typography>
						<Box sx={{ marginBottom: 1, margin: 1 }}>
							<Typography variant="body1" color="secondary.dark"> 
								Advanced student with 3⁄4 of the degree approved
							</Typography>
						</Box>
					</Box>
				</Box>
				<Box>
					<Box sx={{ marginBottom: 1, bgcolor:"primary.main", color:"primary.light", p: 1 }}>
						<Typography variant="subtitle2">INSTITUTO SUPERIOR DE COMERCIO Y
							ADMINISTRACIÓN LA BLANQUEADA</Typography>
					</Box>
					<Box sx={{ margin: 1 , padding: 1}}>
						<Typography variant="subtitle1" color="secondary.dark" sx={{marginBottom: 1}}>Accounting Assistant | 2012 - Finalized</Typography>
						<Typography variant="subtitle1" color="secondary.dark" sx={{marginBottom: 1}}> Administrative Assistant | 2013 - Finalized</Typography>
						<Typography variant="subtitle1" color="secondary.dark" sx={{marginBottom: 1}}>Directors Assistant | 2013 - Finalized</Typography>
					</Box>
				</Box>
			</Card>
		)
	}

export default Education;
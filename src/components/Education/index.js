import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SchoolIcon from '@mui/icons-material/School';

function Education() {
		return (
			<Box>
				<Box sx={{ marginRight: 1, display:'flex', marginTop: 1 }}>
					<Box sx={{ marginRight: 1 }}>
						<SchoolIcon sx={{ color:'primary.main'}}/>
					</Box>
					<Typography variant="h4" color="primary">Education</Typography>
				</Box>
				<Box>
					<Box sx={{ marginBottom: 1, bgcolor:"primary.main", color:"primary.light", p: 1 }}>
						<Typography variant="subtitle2">FING-DGETP-UTEC</Typography>
					</Box>
					<Box sx={{ marginBottom: 1 }}>
						<Typography variant="body1" color="secondary.dark">Information Technologist | 2021 - Present</Typography>
						<Box>
							<Typography variant="body1" color="secondary.dark">
							Student of the first year with the first semester
							completely approved.
							</Typography>
						</Box>
					</Box>
				</Box>
				<Box>
					<Box sx={{ marginBottom: 1, bgcolor:"primary.main", color:"primary.light", p: 1 }}>
						<Typography variant="subtitle2">UNIVERSIDAD DE LA REPÚBLICA</Typography>
					</Box>
					<Box>
						<Typography variant="body1" color="secondary.dark">Bachelor of Economics | 2014 - Paused</Typography>
						<Box sx={{ marginBottom: 1 }}>
							<Typography variant="body1" color="secondary.dark"> 
								Advanced student with 3⁄4 of the degree approved.
							</Typography>
						</Box>
					</Box>
				</Box>
				<Box>
					<Box sx={{ marginBottom: 1, bgcolor:"primary.main", color:"primary.light", p: 1 }}>
						<Typography variant="subtitle2">INSTITUTO SUPERIOR DE COMERCIO Y
							ADMINISTRACIÓN LA BLANQUEADA</Typography>
					</Box>
					<Box sx={{ marginBottom: 1 }}>
						<Typography variant="body1" color="secondary.dark">Accounting Assistant | 2012 - Finalized</Typography>
						<Typography variant="body1" color="secondary.dark">Administrative Assistant | 2013 - Finalized</Typography>
						<Typography variant="body1" color="secondary.dark">Directors Assistant | 2013 - Finalized</Typography>
					</Box>
				</Box>
			</Box>
		)
	}

export default Education;
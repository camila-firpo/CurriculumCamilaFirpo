import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Education() {
		return (
			<Box>
				<Typography variant="h4">Education</Typography>
				<Box>
					<Box sx={{ marginBottom: 1 }}>
						<Typography variant="subtitle2">FING-DGETP-UTEC</Typography>
					</Box>
					<Box sx={{ marginBottom: 1 }}>
						<Typography variant="body1">Information Technologist | 2021 - Present</Typography>
						<Box>
							<Typography variant="body1">
							Student of the first year with the first semester
							completely approved.
							</Typography>
						</Box>
					</Box>
				</Box>
				<Box>
					<Box sx={{ marginBottom: 1 }}>
						<Typography variant="subtitle2">UNIVERSIDAD DE LA REPÚBLICA</Typography>
					</Box>
					<Box>
						<Typography variant="body1">Bachelor of Economics | 2014 - Paused</Typography>
						<Box sx={{ marginBottom: 1 }}>
							<Typography variant="body1"> 
								Advanced student with 3⁄4 of the degree approved.
							</Typography>
						</Box>
					</Box>
				</Box>
				<Box>
					<Box sx={{ marginBottom: 1 }}>
						<Typography variant="subtitle2">INSTITUTO SUPERIOR DE COMERCIO Y
							ADMINISTRACIÓN LA BLANQUEADA</Typography>
					</Box>
					<Box sx={{ marginBottom: 1 }}>
						<Typography variant="body1">Accounting Assistant | 2012 - Finalized</Typography>
						<Typography variant="body1">Administrative Assistant | 2013 - Finalized</Typography>
						<Typography variant="body1">Directors Assistant | 2013 - Finalized</Typography>
					</Box>
				</Box>
			</Box>
		)
	}

export default Education;
import React from 'react';
import Box from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function Experience() {
        return (
            <Box>
                <Typography variant="h4">Experience</Typography> 
                <Box>
                    <Box sx={{ marginBottom: 1 }}>
					    <Typography variant="subtitle2">ASOCIACION CRISTIANA DE JOVENES</Typography>                        
                    </Box>
                    <Box sx={{ marginBottom: 1 }}>
                        <Typography variant="body1">Accounting Assistant, July 2015-Present</Typography>
                        <Box sx={{ marginBottom: 1 }}>
                            <Typography variant="body1">
                                - Voucher registration in the accounting system
                                - Bank reconciliations
                                - Reconciliation of supplier accounts
                                - Credit card reconciliation
                                - Conciliation of other accounts
                            </Typography>
                        </Box>
                        <Typography variant="body1">Public Attention, March 2013-July 2015</Typography>
                        <Box sx={{ marginBottom: 1 }}>
                            <Typography variant="body1">- Provide help to elderly club members</Typography>
                        </Box>
                    </Box>
				</Box>             
            </Box>
        )
 }
export default Experience;
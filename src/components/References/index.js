import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

function References() {
    return (
      <Box>
        <Typography variant="h4" color="primary">Personal references</Typography>
        <Box>
          <Typography variant="body1" color="secondary.dark">
            Andrea Esquivel - Accountant
            <Box sx={{ display: 'flex', marginBottom: 1 }}>
            <Box sx={{ marginRight: 1 }}>
              <LocalPhoneIcon sx={{ color:'primary.main'}}/>
            </Box>
            <Typography variant="body1" color='secondary.dark'>
              099550256
            </Typography>
          </Box>
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1" color="secondary.dark">
            Franca de Luca - Accountant
            <Box sx={{ display: 'flex', marginBottom: 1 }}>
            <Box sx={{ marginRight: 1 }}>
              <LocalPhoneIcon sx={{ color:'primary.main'}}/>
            </Box>
            <Typography variant="body1" color='secondary.dark'>
              094757857
            </Typography>
          </Box>
          </Typography>
        </Box>
      </Box>
    );
}

export default References;

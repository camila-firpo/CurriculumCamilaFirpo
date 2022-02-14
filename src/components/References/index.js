import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Card, CardContent } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PersonIcon from '@mui/icons-material/Person';

function References() {
  return (
    <Card variant="outlined" sx={{ my: 3 }}>
      <Box
        sx={{ marginRight: 1, display: 'flex', marginTop: 2, marginLeft: 2 }}
      >
        <Box sx={{ marginRight: 1, padding: 0.5 }}>
          <PersonIcon sx={{ color: 'primary.main' }} />
        </Box>
        <Typography variant="h4" color="primary">
          Work references
        </Typography>
      </Box>
      <CardContent>
        <Typography variant="body1" color="secondary.dark">
          Andrea Esquivel - Accountant
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ marginRight: 1 }}>
              <LocalPhoneIcon sx={{ color: 'primary.main' }} />
            </Box>
            <Typography variant="body1" color="secondary.dark">
              099550256
            </Typography>
          </Box>
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="body1" color="secondary.dark">
          Franca de Luca - Accountant
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ marginRight: 1 }}>
              <LocalPhoneIcon sx={{ color: 'primary.main' }} />
            </Box>
            <Typography variant="body1" color="secondary.dark">
              094757857
            </Typography>
          </Box>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default References;

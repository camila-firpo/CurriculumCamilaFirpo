import React from 'react';
import Box from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Card } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function Experience() {
  return (
    <Card variant="outlined" sx={{ my: 3 }}>
      <Box
        sx={{ marginRight: 1, display: 'flex', marginTop: 2, marginLeft: 2 }}
      >
        <Box sx={{ marginRight: 1, padding: 0.5 }}>
          <BusinessCenterIcon sx={{ color: 'primary.main' }} />
        </Box>
        <Typography variant="h4" color="primary">
          Work experience
        </Typography>
      </Box>
      <Box>
        <Box
          sx={{
            marginBottom: 1,
            bgcolor: 'primary.main',
            color: 'primary.light',
            p: 1,
          }}
        >
          <Typography variant="subtitle2">
            ASOCIACION CRISTIANA DE JOVENES
          </Typography>
        </Box>
        <Box sx={{ margin: 1, padding: 1 }}>
          <Typography variant="subtitle1" color="secondary.dark">
            Accounting Assistant, July 2015-Present
          </Typography>
          <Box sx={{ color: 'secondary.dark', variant: 'body1' }}>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }} dense>
              <ListItem>
                <FiberManualRecordIcon
                  sx={{
                    fontSize: 10,
                    color: 'primary.main',
                    padding: 0.5,
                  }}
                />
                <ListItemText primary="Voucher registration in the accounting system" />
              </ListItem>
              <ListItem>
                <FiberManualRecordIcon
                  sx={{
                    fontSize: 10,
                    color: 'primary.main',
                    padding: 0.5,
                  }}
                />
                <ListItemText primary="Bank reconciliations" />
              </ListItem>
              <ListItem>
                <FiberManualRecordIcon
                  sx={{
                    fontSize: 10,
                    color: 'primary.main',
                    padding: 0.5,
                  }}
                />
                <ListItemText primary="Reconciliation of supplier accounts" />
              </ListItem>
              <ListItem>
                <FiberManualRecordIcon
                  sx={{
                    fontSize: 10,
                    color: 'primary.main',
                    padding: 0.5,
                  }}
                />
                <ListItemText primary="Credit card reconciliation" />
              </ListItem>
              <ListItem>
                <FiberManualRecordIcon
                  sx={{
                    fontSize: 10,
                    color: 'primary.main',
                    padding: 0.5,
                  }}
                />
                <ListItemText primary="Conciliation of other accounts" />
              </ListItem>
            </List>
          </Box>
          <Typography variant="subtitle1" color="secondary.dark">
            Public Attention, March 2013-July 2015
          </Typography>
          <Box sx={{ variant: 'body1', color: 'secondary.dark' }}>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }} dense>
              <ListItem>
                <FiberManualRecordIcon
                  sx={{
                    fontSize: 10,
                    color: 'primary.main',
                    padding: 0.5,
                  }}
                />
                <ListItemText primary="Provide help to elderly club members" />
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
export default Experience;

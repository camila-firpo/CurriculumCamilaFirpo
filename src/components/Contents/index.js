import React from 'react';
import Box from '@mui/material/Box';
import Experience from '../Experience';
import Education from '../Education';
import References from '../References';

function Contents() {
  return (
    <Box>
      <Education />
      <Experience />
      <References />
    </Box>
  );
}

export default Contents;

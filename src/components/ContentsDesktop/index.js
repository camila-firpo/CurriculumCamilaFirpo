import React from 'react';
import Box from '@mui/material/Box';
import Zoom from '@mui/material/Zoom';
import Experience from '../Experience';
import Education from '../Education';
import References from '../References';

function Contents() {
  return (
    <Box>
      <Zoom in>
        <Box>
          <Education />
        </Box>
      </Zoom>

      <Experience />
      <References />
    </Box>
  );
}

export default Contents;

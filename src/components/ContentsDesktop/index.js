import React from 'react';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import Experience from '../Experience';
import Education from '../Education';
import References from '../References';

function ContentsDesktop() {
  return (
    <Box>
      <Box sx={{ minHeight: 200 }}>
        <Slide direction="left" in timeout={1000} mountOnEnter unmountOnExit>
          <Box>
            <Education />
          </Box>
        </Slide>
      </Box>
      <Box sx={{ minHeight: 200 }}>
        <Slide direction="left" in timeout={1500}>
          <Box>
            <Experience />
          </Box>
        </Slide>
      </Box>
      <Box sx={{ minHeight: 200 }}>
        <Slide direction="left" in timeout={2000}>
          <Box>
            <References />
          </Box>
        </Slide>
      </Box>
    </Box>
  );
}

export default ContentsDesktop;

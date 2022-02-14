// esLint-disable
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import VisibilitySensor from 'react-visibility-sensor';
import Zoom from '@mui/material/Zoom';
import Experience from '../Experience';
import Education from '../Education';
import References from '../References';

function ContentsMobile() {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);

  const onChange1 = (isVisible1) => {
    console.log('Entra onChange', visible1);
    if (!visible1) {
      setVisible1(isVisible1);
    }
  };

  const onChange2 = (isVisible2) => {
    console.log('Entra onChange', visible2);
    if (!visible2) {
      setVisible2(isVisible2);
    }
  };

  const onChange3 = (isVisible3) => {
    console.log('Entra onChange', visible3);
    if (!visible3) {
      setVisible3(isVisible3);
    }
  };

  return (
    <Box>
      <VisibilitySensor
        onChange={onChange1}
        partialVisibility
        minTopValue={100}
      >
        <Box sx={{ minHeight: 200 }}>
          <Zoom in={visible1}>
            <Box>
              <Education />
            </Box>
          </Zoom>
        </Box>
      </VisibilitySensor>
      <VisibilitySensor onChange={onChange2} partialVisibility>
        <Box sx={{ minHeight: 200 }}>
          <Zoom in={visible2}>
            <Box>
              <Experience />
            </Box>
          </Zoom>
        </Box>
      </VisibilitySensor>
      <VisibilitySensor onChange={onChange3} partialVisibility>
        <Box sx={{ minHeight: 200 }}>
          <Zoom in={visible3}>
            <Box>
              <References />
            </Box>
          </Zoom>
        </Box>
      </VisibilitySensor>
    </Box>
  );
}

export default ContentsMobile;

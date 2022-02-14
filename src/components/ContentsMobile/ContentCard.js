import React, { useState } from 'react';
import Box from '@mui/material/Box';
import VisibilitySensor from 'react-visibility-sensor';
import Zoom from '@mui/material/Zoom';

function ContentCard(props) {
  const [visible, setVisible] = useState(false);

  const onChange = (isVisible) => {
    if (!visible) {
      setVisible(isVisible);
    }
  };

  return (
    <VisibilitySensor onChange={onChange} partialVisibility minTopValue={100}>
      <Box sx={{ minHeight: 200 }}>
        <Zoom in={visible} timeout={1000}>
          <Box>
            <props.component />
          </Box>
        </Zoom>
      </Box>
    </VisibilitySensor>
  );
}

export default ContentCard;

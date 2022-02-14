import React from 'react';
import Box from '@mui/material/Box';
import Experience from '../Experience';
import Education from '../Education';
import References from '../References';
import ContentCard from './ContentCard';

function ContentsMobile() {
  return (
    <Box>
      <ContentCard component={Education} />
      <ContentCard component={Experience} />
      <ContentCard component={References} />
    </Box>
  );
}

export default ContentsMobile;

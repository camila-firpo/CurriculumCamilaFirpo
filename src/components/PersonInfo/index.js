import React from 'react';
import Box from '@mui/material/Box';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import Avatar from '@mui/material/Avatar';

function PersonInfo() {
    return (
      <Box sx={{
			  textAlign: 'center',
			  height: '100vh',
			  background: '#127384',
      }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 1 }}>
          <Avatar src="images/ProfilePicture.jpg" sx={{ width: 200, height: 200 }} />
        </Box>
        <Box sx={{ display: 'inline-block', justifyContent: 'center' }}>
          <Box sx={{ marginBottom: 1 }}>
            <Typography variant="h4">Camila Firpo </Typography>
          </Box>
          <Box sx={{ display: 'flex', marginBottom: 1 }}>
            <Box sx={{ marginRight: 1 }}>
              <LocalPhoneIcon />
            </Box>
            <Typography variant="body1">
              099094726
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', marginBottom: 1 }}>
            <Box sx={{ marginRight: 1 }}>
              <EmailIcon />
            </Box>
            <Typography variant="body1">
              camilafirpo2294@hotmail.com
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', marginBottom: 1 }}>
            <Box sx={{ marginRight: 1 }}>
              <LocationOnIcon />
            </Box>
            <Typography variant="body1">
              Malvin, Montevideo
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', marginBottom: 1 }}>
            <Box sx={{ marginRight: 1 }}>
              <Link href="https://www.linkedin.com/in/camila-firpo/" target="_blank">
                <LinkedInIcon />
              </Link>
            </Box>
            <Link href="https://github.com/camila-firpo" target="_blank">
              <GitHubIcon />
            </Link>
          </Box>
          <Box>
            <Box>
              <Box sx={{ display: 'flex', marginBottom: 1, justifyContent: 'center' }}>
                <Typography variant="h6">
                  Personal profile
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', marginBottom: 1, justifyContent: 'center' }}>
                <Typography variant="body1">
                I am an Information Technologist student who
                also has 3⁄4 of the Bachelors degree of
                Economics approved.
                I am Currently looking for my first work
                experience in the IT sector. I consider myself
                to be responsible, with good disposition and
                eager to learn new things.
                </Typography> 
              </Box>
            </Box>
            <Box>
              <Box sx={{ display: 'flex', marginBottom: 1, justifyContent: 'center' }}>
                <Typography variant="h6">
                  Habilities
                </Typography>                
              </Box>
              <Box sx={{ display: 'flex', marginBottom: 1, justifyContent: 'center' }}>
                <Typography variant="body1">
                  C, C++, HTML, CSS, SQL, Javascript, React
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }


export default PersonInfo;
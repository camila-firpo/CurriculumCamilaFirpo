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
    <Box
      sx={{
        textAlign: 'center',
        height: '100%',
        bgcolor: 'primary.main',
        typography: 'body1',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 1 }}>
        <Avatar
          src="images/ProfilePicture.jpg"
          sx={{ width: 200, height: 200 }}
        />
      </Box>
      <Box sx={{ display: 'inline-block', justifyContent: 'center' }}>
        <Box sx={{ marginBottom: 1 }}>
          <Typography variant="h4" color="primary.light">
            Camila Firpo{' '}
          </Typography>
        </Box>
        <Box
          sx={{ display: 'flex', marginBottom: 1, justifyContent: 'center' }}
        >
          <Box sx={{ marginRight: 1 }}>
            <LocalPhoneIcon sx={{ color: 'primary.light' }} />
          </Box>
          <Typography variant="body1" color="secondary.main">
            099094726
          </Typography>
        </Box>
        <Box
          sx={{ display: 'flex', marginBottom: 1, justifyContent: 'center' }}
        >
          <Box sx={{ marginRight: 1 }}>
            <EmailIcon sx={{ color: 'primary.light' }} />
          </Box>
          <Typography variant="body1" color="secondary.main">
            camilafirpo2294@hotmail.com
          </Typography>
        </Box>
        <Box
          sx={{ display: 'flex', marginBottom: 1, justifyContent: 'center' }}
        >
          <Box sx={{ marginRight: 1 }}>
            <LocationOnIcon sx={{ color: 'primary.light' }} />
          </Box>
          <Typography variant="body1" color="secondary.main">
            Malvin, Montevideo
          </Typography>
        </Box>
        <Box
          sx={{ display: 'flex', marginBottom: 1, justifyContent: 'center' }}
        >
          <Box sx={{ marginRight: 1 }}>
            <Link
              href="https://www.linkedin.com/in/camila-firpo/"
              target="_blank"
              color="primary.light"
            >
              <LinkedInIcon />
            </Link>
          </Box>
          <Link
            href="https://github.com/camila-firpo"
            target="_blank"
            color="primary.light"
          >
            <GitHubIcon />
          </Link>
        </Box>
        <Box>
          <Box>
            <Box
              sx={{
                display: 'flex',
                marginBottom: 1,
                justifyContent: 'center',
              }}
            >
              <Typography variant="h6" color="primary.light">
                Personal profile
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                marginBottom: 1,
                justifyContent: 'center',
                padding: 1.5,
              }}
            >
              <Typography variant="body1" color="secondary.main">
                I am an Information Technologist student who also has 3⁄4 of the
                Bachelor&apos;s degree of Economics approved. Currently looking
                for my first work experience in the IT sector, as a developer. I
                consider myself to be responsible, with good disposition and
                eager to learn new things.
                
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                display: 'flex',
                marginBottom: 1,
                justifyContent: 'center',
              }}
            >
              <Typography variant="h6" color="primary.light">
                Skills
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                marginBottom: 1,
                justifyContent: 'center',
              }}
            >
              <Typography variant="body1" color="secondary.main">
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

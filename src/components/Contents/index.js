import React, { Component } from 'react';
import Experiencia from '../Experiencia';
import Education from '../Education';
import References from '../References';
import Box from '@mui/material/Box';

export default class Contents extends Component {
	render() {
		return (
            <Box>
                <Education/>
                <Experiencia/>
                <References/>
            </Box>
        )
			
	}
}
import React, { Component } from 'react';
import Experiencia from '../Experiencia';
import Education from '../Education';
import References from '../References';
import './index.css';

export default class Contents extends Component {
	render() {
		return (
            <div className="asd">
                <Education/>
                <Experiencia/>
                <References/>
            </div>
        )
			
	}
}
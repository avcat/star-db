import React from 'react';

import './Planets.css';
import SwapiService from '../../services/SwapiService.js';

export default class Planets extends React.Component {

	state = {
		planets: []
	}

	componentDidMount() {
		this.get_data();
	}

	SwapiService = new SwapiService();

	get_data = async () => {
		try {
			const planets = await this.SwapiService.get_all_planets();
			this.setState({
				planets
			});
		} catch (err) {
			console.log(err);
		}
	}

	render() {

		const {
			planets
		} = this.state;

		console.log(planets);

		return (
			<div className='Planets card d-flex flex-row align-items-center p-4 gap-3 justify-content-center'>
				Planets
				---
				Here should be List component
				---
				Here should be Planet component
			</div>
		);
	}
}
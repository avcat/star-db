import React from 'react';

import './Planet.css';
import SwapiService from '../../services/SwapiService.js';

export default class Planet extends React.Component {

	state = {
		name: null,
		population: null,
		rotation_period: null,
		diameter: null,
		image: null
	}

	constructor() {
		super();
		this.get_data(1);
	}

	SwapiService = new SwapiService();

	get_data = async (id) => {
		const data = await this.SwapiService.get_single_planet(id);
		const image = await this.SwapiService.get_planet_image(id);

		this.setState({
			name: data.name,
			population: data.population,
			rotation_period: data.rotation_period,
			diameter: data.diameter,
			image: image || null
		});
	}

	render() {

		const {
			name,
			population,
			rotation_period,
			diameter,
			image
		} = this.state;

		const image_html = image ? (
			<img className="person-image" src={image} alt='details' />
		) : ( null );

		return (
			<div className='Planet card d-flex flex-row align-items-center p-4 gap-3'>

				{image_html}

				<div className="card-body">
					<h4 className='text-center'>{name}</h4>

					<ul className="list-group">
						<li className="list-group-item d-flex justify-content-between">
							<span className="term">Population</span>
							<span>{population}</span>
						</li>
						<li className="list-group-item d-flex justify-content-between">
							<span className="term">Rotation period</span>
							<span>{rotation_period}</span>
						</li>
						<li className="list-group-item d-flex justify-content-between">
							<span className="term">Diameter</span>
							<span>{diameter}</span>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
import React from 'react';

import './Planet.css';
import SwapiService from '../../services/SwapiService.js';
import Spinner from '../Spinner';

export default class Planet extends React.Component {

	state = {
		planet: {}
	}

	constructor(props) {
		super();
		const id = props.id || Math.floor(Math.random() * 9 + 1);
		this.get_data(id);
	}

	SwapiService = new SwapiService();

	get_data = async (id) => {
		const planet = await this.SwapiService.get_single_planet(id);
		this.setState({planet});
	}

	render() {

		const {
			name,
			population,
			rotation_period,
			diameter,
			image_url
		} = this.state.planet;

		const image_html = image_url ? (
			<img className="image" src={image_url} alt='details' />
		) : ( null );

		return (
			<div className='Planet card d-flex flex-row align-items-center p-4 gap-3'>

				{image_html}

				<Spinner width={60} />

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
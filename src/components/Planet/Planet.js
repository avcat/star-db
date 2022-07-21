import React from 'react';

import './Planet.css';
import SwapiService from '../../services/SwapiService.js';
import Spinner from '../Spinner';
import Error from '../Error';

export default class Planet extends React.Component {

	// TODO: create input field to load Planet by id on user's demand

	state = {
		planet: {},
		loading: true,
		error: false,
		message: null
	}

	componentDidMount() {
		const id = this.props.id || Math.floor(Math.random() * 9 + 1);
		this.get_data(id);
	}

	SwapiService = new SwapiService();

	get_data = async (id) => {
		try {
			const planet = await this.SwapiService.get_single_planet(id);
			this.setState({
				planet,
				loading: false
			});
		} catch (err) {
			this.setState({
				loading: false,
				error: true,
				message: err.message
			});
		}
	}

	render() {

		const {
			planet,
			loading,
			error,
			message
		} = this.state;

		const content = loading ?
			<Spinner width={60} /> :
			error ? <Error message={message} /> :
			<PlanetContent planet={planet} />;

		return (
			<div className='Planet card d-flex flex-row align-items-center p-4 gap-3 justify-content-center'>
				{content}
			</div>
		);
	}
}

const PlanetContent = ({planet}) => {
	const {
		name,
		population,
		rotation_period,
		diameter,
		image_url
	} = planet;

	const image_html = image_url ? (
		<img className="image rounded" src={image_url} alt='details' />
	) : null;

	return (
		<React.Fragment>
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
		</React.Fragment>
	);
}
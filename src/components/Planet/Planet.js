import React from 'react';
import './Planet.css';
import SwapiService from '../../services/SwapiService.js';
import PlanetContent from '../PlanetContent';
import Spinner from '../Spinner';
import Error from '../Error';

export default class Planet extends React.Component {

	// TODO: create input field to load Planet by id on user's demand

	// TODO: shown random planet with intervals

	// TODO: add buttons to manage autochanging planets showcase

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
			<div className='Planet card d-flex flex-row align-items-center p-4 gap-3 justify-content-between'>
				{content}
			</div>
		);
	}
}

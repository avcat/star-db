import React from 'react';
import './Planets.css';
import SwapiService from '../../services/SwapiService.js';
import PlanetContent from '../PlanetContent';
import Spinner from '../Spinner';

// TODO: align content inside components

export default class Planets extends React.Component {

	state = {
		planets: [],
		planetShowingIndex: null
	}

	componentDidMount() {
		this.get_data();
	}

	SwapiService = new SwapiService();

	get_data = async () => {
		try {
			const planets = await this.SwapiService.get_all_planets();
			this.setState({planets, planetShowingIndex: 0});
		} catch (err) {
			console.error(err);
		}
	}

	planetSelected = (index) => {
    this.setState({planetShowingIndex: index});
  };

	render() {

		const {
			planets,
			planetShowingIndex
		} = this.state;

		const render_list_items = (data) => {
			return data.map((el, index) => {
				return (
					<li
						key={index}
						onClick={() => this.planetSelected(index)}
						className={
							"list-group-item"
							+ (index === this.state.planetShowingIndex ? ' active' : '')
						}
					>
						{el.name}
					</li>
				);
			});
		}

		const planetsList = planets.length > 0 ? (
			<ul className='planets_list item-list list-group'>
				{render_list_items(planets)}
			</ul>
		) : <Spinner width={60} />;

		const currentPlanet = planets.length > 0 && planetShowingIndex !== null ? (
			<PlanetContent planet={planets[planetShowingIndex]} />
		) : <Spinner width={60} />;

		return (
			<div className='Planets card d-flex flex-row align-items-center p-4 gap-3 justify-content-between'>
				{planetsList}
				{currentPlanet}
			</div>
		);
	}
}
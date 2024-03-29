import React from 'react';
import './SingleItem.css';
import SwapiService from '../../services/SwapiService.js';
import ItemContent from '../ItemContent';
import Error from '../Error';

// TODO: create input field to load SingleItem by id on user's demand
// TODO: shown random SingleItem with intervals
// TODO: add buttons to manage autochanging SingleItems showcase

export default class SingleItem extends React.Component {

	SwapiService = new SwapiService();

	state = {
		id: this.props.id || Math.floor(Math.random() * 9 + 1),
		type: this.props.type,
		data: null,
		loading: true,
		error: false,
		message: null
	}

	componentDidMount() {
		this.get_data(this.state.id);
	}

	get_data = async (id) => {
		try {
			let data = null;
			switch(this.state.type) {
				case 'planet':
					data = await this.SwapiService.get_single_planet(id); break;
				case 'person':
					data = await this.SwapiService.get_single_person(id); break;
				case 'starship':
					data = await this.SwapiService.get_single_starship(id); break;
				default:
					data = null;
			}
			this.setState({data, loading: false});
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
			id,
			type,
			data,
			message
		} = this.state;

		const content = data ? (
			<ItemContent itemData={data} type={type} />
		) : (
			<Error message={message} type={type} />
		);

		return (
			<div className={'SingleItem d-flex flex-row align-items-center gap-3 justify-content-between card'}>
				{content}
			</div>
		);
	}
}
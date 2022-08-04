import React from 'react';
import './SingleItem.css';
import SwapiService from '../../services/SwapiService.js';

// TODO: create input field to load SingleItem by id on user's demand
// TODO: shown random SingleItem with intervals
// TODO: add buttons to manage autochanging SingleItems showcase

export default class SingleItem extends React.Component {

	SwapiService = new SwapiService();

	state = {
		data: {},
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
			let data = null;
			switch(this.props.type) {
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
			data,
			loading,
			error,
			message
		} = this.state;
		const type = this.props.type;

		const content = data ? (
			<SingleItemContent data={data} type={type} />
		) : (
			<div className="card-body">
				<p>No {type} found with id {this.props.id}</p>
			</div>
		);

		return (
			<div className='SingleItem card d-flex flex-row align-items-center p-4 gap-3 justify-content-between'>
				{content}
			</div>
		);
	}
}

export const SingleItemContent = ({data, type}) => {
	let image_html = null;
	let info_html = null;
	let name = null;

	if (data) {
		image_html = data.image_url ? (
			<img className="image rounded" src={data.image_url} alt='details' />
		) : null;
		name = <h3 className='name'>{data.name}</h3>;

		const info = [];
		for (const prop in data) {
			if (prop !== 'id' && prop !== 'image_url') {
				info.push([
					prop.split('_').join(' '),
					data[prop] || 'unknown'
				]);
			}
		}

		info_html = info.map(item => {
			return <li className="list-group-item d-flex justify-content-between">
				<span className="term">
					{item[0]}
				</span>
				<span className='value'>
					{item[1]}
				</span>
			</li>
		});
	}

	return (
		<React.Fragment>
			{image_html}

			{name}

			<div className="card-body">
				<ul className="list-group">
					{info_html}
				</ul>
			</div>
		</React.Fragment>
	);
}
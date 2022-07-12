import React from 'react';

import './Details.css';
import SwapiService from '../../services/SwapiService.js';
import { v4 as uuidv4 } from 'uuid';

export default class Details extends React.Component {

	state = {}

	SwapiService = new SwapiService();

	get_classes = () => {
		const add_class = this.props.add_class;
		if (!add_class) { return; }
		let classes = add_class.includes('all') ? ' flex-column' : ' flex-row';
		return classes + ` ${add_class}`;
	}

	get_data = async () => {
		const id = this.props.id || Math.floor(Math.random() * 9 + 1);
		let data;

		switch( this.props.type ) {
			case 'person': data = await this.SwapiService.get_single_person(id); break;
			case 'planet': data = await this.SwapiService.get_single_planet(id); break;
			case 'starship': data = await this.SwapiService.get_single_starship(id); break;
			default: data = null; break;
		}

		this.setState({data});
		return data;
	}

	componentDidMount() {
		const { type, id } = this.props;
		this.setState({type, id});
		this.get_data();
	}

	render() {

		const get_properties_list = async () => {
			const data = await this.state.data;

			if (!data && typeof(data) !== 'object') { return null; }

			if (Object.entries(data).length <= 0) { return null; }

			const data_array = Object.entries(data);

			console.log(2, data_array);

			const properties_list = data_array.map((property, index) => {
				const key = uuidv4();

				return (
					<li
						key={key}
						className="list-group-item d-flex justify-content-between"
					>
						<span className='property_title term'>
							{property[0]}
						</span>
						<span className='property_name'>
							{property[1]}
						</span>
					</li>
				);
			});

			console.log(3, properties_list);

			return properties_list;
		}

		const data = this.state.data;
		const properties_list = get_properties_list(this.state.data);
		console.log(1, data, properties_list);

		return (
			<div className={'Details card d-flex flex-row align-items-center p-4 gap-3 ' + this.get_classes()}>
				<img className="person-image" src="https://starwars-visualguide.com/assets/img/characters/3.jpg" alt='details' />

				<div className="card-body">
					<h4 className='text-center'>R2-D2</h4>

					{/* TODO: use retrieved data to create a list of properties */}
					<ul className="list-group">
						{properties_list}
					</ul>
				</div>
			</div>
		);
	}
}
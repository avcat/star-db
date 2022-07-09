import React from 'react';

import './Details.css';
import SwapiService from '../../services/SwapiService.js';

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
	}

	componentDidMount() {
		const { type, id } = this.props;
		this.setState({type, id});
		this.get_data();
	}

	render() {

		console.log(this.state);

		return (
			<div className={'Details card d-flex flex-row align-items-center p-4 gap-3 ' + this.get_classes()}>
				<img className="person-image" src="https://starwars-visualguide.com/assets/img/characters/3.jpg" alt='details' />

				<div className="card-body">
					<h4 className='text-center'>R2-D2</h4>

					{/* TODO: use retrieved data to create a list of properties */}
					<ul className="list-group">
						<li className="list-group-item d-flex justify-content-between">
							<span className="term">Gender</span>
							<span>male</span>
						</li>
						<li className="list-group-item d-flex justify-content-between">
							<span className="term">Birth Year</span>
							<span>43</span>
						</li>
						<li className="list-group-item d-flex justify-content-between">
							<span className="term">Eye Color</span>
							<span>red</span>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
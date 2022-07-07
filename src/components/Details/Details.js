import React from 'react';

import './Details.css';
import SwapiService from '../../services/SwapiService.js';

export default class Details extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			type: props.type,
			id: props.id
		}
	}

	SwapiService = new SwapiService();

	get_classes = () => {
		const add_class = this.props.add_class;
		if (!add_class) { return; }
		let classes = add_class.includes('all') ? ' flex-column' : ' flex-row';
		return classes + ` ${add_class}`;
	}

	get_data = async () => {
		const id = this.props.id || Math.floor(Math.random() * 9 + 1);
		switch( this.state.type ) {
			case 'person':
				return await this.SwapiService.get_single_person(id);
			case 'planet':
				return await this.SwapiService.get_single_planet(id);
			case 'starship':
				return await this.SwapiService.get_single_starship(id);
			default:
				return null;
		}
	}

	componentWillMount() {
		const data = this.get_data();
		this.setState({ data }); // returns Promise
	}

	render() {

		console.log(this.state);

		return (
			<div className={'Details card d-flex flex-row align-items-center p-4 gap-3 ' + this.get_classes()}>
				<img className="person-image" src="https://starwars-visualguide.com/assets/img/characters/3.jpg" alt='details' />

				<div className="card-body">
					<h4 className='text-center'>R2-D2</h4>
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
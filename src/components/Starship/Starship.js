import React from 'react';

import './Starship.css';
import SwapiService from '../../services/SwapiService.js';

export default class Starship extends React.Component {

	state = {}
	SwapiService = new SwapiService();

	render() {

		return (
			<div className='Starship card d-flex flex-row align-items-center p-4 gap-3'>
				<img className="person-image" src="https://starwars-visualguide.com/assets/img/characters/3.jpg" alt='details' />

				<div className="card-body">
					<h4 className='text-center'>Starship</h4>

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
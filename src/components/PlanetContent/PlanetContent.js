import React from 'react';

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

export default PlanetContent;
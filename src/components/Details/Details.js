import './Details.css';

const Details = (props) => {
	const add_class = props.add_class || '';

	const get_classes = () => {
		if (!add_class) { return; }
		let classes = add_class.includes('all') ? ' flex-column' : ' flex-row';
		return classes + ` ${add_class}`;
	}

	return (
		<div className={'Details card d-flex flex-row align-items-center p-4 gap-3 ' + get_classes()}>
			<img className="person-image" src="https://starwars-visualguide.com/assets/img/characters/3.jpg" alt='details' />

			<div className="card-body">
				<h4 className='text-center'>R2-D2</h4>
				{/* TODO: pass here List component with props */}
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

export default Details;
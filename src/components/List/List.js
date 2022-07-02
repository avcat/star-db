import './List.css';

const List = (props) => {
	const add_class = props.add_class || '';
	return (
		<ul className={'List item-list list-group ' + add_class}>
			<li className="list-group-item">
				Luke Skywalker
			</li>
			<li className="list-group-item">
				Darth Vader
			</li>
			<li className="list-group-item">
				R2-D2
			</li>
		</ul>
	);
}

export default List;
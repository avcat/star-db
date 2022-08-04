import React from 'react';
import './ItemContent.css';

const ItemContent = ({itemData, type}) => {
	let image_html = null;
	let info_html = null;
	let name = null;

	if (itemData) {
		image_html = itemData.image_url ? (
			<img className="image rounded" src={itemData.image_url} alt='details' />
		) : null;
		name = <h3 className='name'>{itemData.name}</h3>;

		const info = [];
		for (const prop in itemData) {
			if (prop !== 'id' && prop !== 'image_url') {
				info.push([
					prop.split('_').join(' '),
					itemData[prop] || 'unknown'
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
		<div className={'ItemContent type_' + type}>
			{image_html}

			{name}

			<div className="card-body">
				<ul className="list-group">
					{info_html}
				</ul>
			</div>
		</div>
	);
}

export default ItemContent;
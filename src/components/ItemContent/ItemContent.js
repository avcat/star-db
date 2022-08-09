import React from 'react';
import './ItemContent.css';

const ItemContent = ({itemData, type}) => {
	let image_html = null;
	let info_html = null;
	let name = null;

	if (itemData) {
		image_html = itemData.image_url ? (
			<img className="image rounded item_image" src={itemData.image_url} alt='details' />
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

		info_html = info.map((item, index) => {
			const value = item[1];
			const title = value.length > 15 ? value : null;

			return <li key={index} className="list-group-item d-flex justify-content-between gap-4">
				<span className="term">
					{item[0]}
				</span>
				<span className='value' title={title}>
					{item[1]}
				</span>
			</li>
		});
	}

	return (
		<div className={'ItemContent type_' + type}>
			{image_html}

			<div className="card-body">
				{name}
				<ul className="list-group">
					{info_html}
				</ul>
			</div>
		</div>
	);
}

export default ItemContent;
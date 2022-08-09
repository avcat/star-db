import React from 'react';
import './MultipleItems.css';
import SwapiService from '../../services/SwapiService.js';
import Spinner from '../Spinner';
import ItemContent from '../ItemContent';

export default class MultipleItems extends React.Component {

	state = {
		page: this.props.page,
		type: this.props.type,
		data: [],
		itemShowingIndex: null,
		loading: true,
		error: false,
		message: null
	}

	SwapiService = new SwapiService();

	componentDidMount() {
		const page = this.state.page || Math.floor(Math.random() * 5 + 1);
		this.get_data(page);
	}

	get_data = async (page) => {

		try {
			let data = null;
			switch(this.state.type) {
				case 'planet':
					data = await this.SwapiService.get_all_planets(page); break;
				case 'person':
					data = await this.SwapiService.get_all_people(page); break;
				case 'starship':
					data = await this.SwapiService.get_all_starships(page); break;
				default:
					data = null;
			}
			this.setState({
				data,
				itemShowingIndex: 0,
				loading: false
			});
		} catch (err) {
			this.setState({
				loading: false,
				error: true,
				message: err.message
			});
		}
	}

	itemSelected = (index) => {
    this.setState({itemShowingIndex: index});
  };

	render() {

		const {
			page,
			type,
			data,
			itemShowingIndex
		} = this.state;

		const render_list_items = (data) => {
			return data.map((el, index) => {
				return el.name && el.name !== 'unknown' ? (
					<li
						key={index}
						onClick={() => this.itemSelected(index)}
						className={
							"list-group-item"
							+ (index === this.state.itemShowingIndex ? ' active' : '')
						}
					>
						{el.name}
					</li>
				) : null;
			});
		}

		const namesList = data.length > 0 ? (
			<ul className='items_list item-list list-group'>
				{render_list_items(data)}
			</ul>
		) : <Spinner width={60} />;

		const singleItem = data.length > 0 && itemShowingIndex !== null ? (
			<ItemContent itemData={data[itemShowingIndex]} type={type} />
		) : <Spinner width={60} />;

		return (
			<div className='MultipleItems card d-flex flex-row align-items-center p-4 gap-3'>
				{namesList}
				{singleItem}
			</div>
		)
	}

}
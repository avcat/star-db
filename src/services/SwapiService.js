import { get_properties } from './helpers.js';

export default class Swapi_Service {

	constructor() {
		this.get_properties = get_properties;
	}

	_api_base = 'https://swapi.dev/api';
	_api_img_base = 'https://starwars-visualguide.com/assets/img';

	async get_data_from_url ( url_part, type = 'data' ) {

		try {
			const full_path = type === 'data' ? (
				`${ this._api_base }${ url_part }`
			) : (
				`${ this._api_img_base }${ url_part }`
			);

			const response = await fetch( full_path );
			if ( !response.ok ) { // if result status is not the one of 200-299
				throw new Error( `Could not fetch from ${ full_path } - received status ${ response.status }` );
			}
			const data = type === 'data' ? await response.json() : await response.url;
			return data;
		}
		catch( err ) {
			console.error( `No way! ${err}` );
		};
	}

	get_id = ( object ) => {
		const id = parseInt(object?.url.match(/\d+/g)[0]);
		return id;
	}

	// -------------------------------- PEOPLE --------------------------------

	async get_all_people() {
		const data = await this.get_data_from_url( `/people/` );
		const array_of_objects = await data.results;
		return array_of_objects;
	}
	async get_single_person( id ) {
		const single_object = await this.get_data_from_url( `/people/${ id }` );
		const data = this.get_properties([
			'birth_year', 'eye_color', 'gender', 'hair_color', 'height', 'name',
			'homeworld', 'starships'
		], single_object);
		return data;
	}
	async get_person_image( id ) {
		const single_img = await this.get_data_from_url( `/characters/${ id }.jpg`, 'img' );
		return single_img;
	}

	// -------------------------------- PLANETS --------------------------------

	async get_planet_image( id ) {
		const single_img = await this.get_data_from_url( `/planets/${ id }.jpg`, 'img' );
		return single_img;
	}

	async transform_data_planet(planet) {
		const id = this.get_id(planet);
		const image_url = await this.get_planet_image(id);

		return {
			id: id,
			name: planet.name,
			population: planet.population,
			rotation_period: planet.rotation_period,
			diameter: planet.diameter,
			image_url: image_url
		}
	}

	async get_single_planet( id ) {
		const planet = await this.get_data_from_url( `/planets/${ id }` );
		const transformed_planet_data = await this.transform_data_planet(planet);
		return transformed_planet_data;
	}

	async get_all_planets() {
		const data = await this.get_data_from_url( `/planets/` );
		const results = data.results;
		// const prepared_data = results.map(planet => this.transform_data_planet(planet)); // TODO: resolve pending Promise
		return results;
	}

	// -------------------------------- STARSHIPS --------------------------------

	async get_all_starships() {
		const data = await this.get_data_from_url( `/starships/` );
		const array_of_objects = await data.results;
		return array_of_objects;
	}
	async get_single_starship( id ) {
		const single_object = await this.get_data_from_url( `/starships/${ id }` );
		return single_object;
	}
	async get_starship_image( id ) {
		const single_img = await this.get_data_from_url( `/starships/${ id }.jpg`, 'img' );
		return single_img;
	}

}
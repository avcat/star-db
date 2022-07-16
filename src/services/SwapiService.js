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

	async get_person_image( id ) {
		const single_img = await this.get_data_from_url( `/characters/${ id }.jpg`, 'img' );
		return single_img;
	}

	async transform_data_person(person) {
		const id = this.get_id(person);
		const image_url = await this.get_person_image(id);

		return {
			id: id,
			name: person.name,
			gender: person.gender,
			birthYear: person.birthYear,
			eyeColor: person.eyeColor,
			image_url: image_url
		}
	}

	async get_single_person( id ) {
		const person = await this.get_data_from_url( `/people/${ id }` );
		const transformed_data = await this.transform_data_person(person);
		return transformed_data;
	}

	async get_all_people() {
		const data = await this.get_data_from_url( `/people/` );
		const transformed_data = await data.results.map(async (person) => {
			const transformed_data = await this.transform_data_person(person);
			return transformed_data;
		});
		const prepared_data = await Promise.all(transformed_data);
		return prepared_data;
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
		const transformed_data = await this.transform_data_planet(planet);
		return transformed_data;
	}

	async get_all_planets() {
		const data = await this.get_data_from_url( `/planets/` );
		const transformed_data = await data.results.map(async (planet) => {
			const transformed_data = await this.transform_data_planet(planet);
			return transformed_data;
		});
		const prepared_data = await Promise.all(transformed_data);
		return prepared_data;
	}

	// -------------------------------- STARSHIPS --------------------------------

	async get_starship_image( id ) {
		const single_img = await this.get_data_from_url( `/starships/${ id }.jpg`, 'img' );
		return single_img;
	}

	async transform_data_starship(starship) {
		const id = this.get_id(starship);
		const image_url = await this.get_starship_image(id);

		return {
			id: id,
			name: starship.name,
			model: starship.model,
			manufacturer: starship.manufacturer,
			costInCredits: starship.costInCredits,
			length: starship.length,
			crew: starship.crew,
			passengers: starship.passengers,
			cargoCapacity: starship.cargoCapacity,
			image_url: image_url
		}
	}

	async get_single_starship( id ) {
		const starship = await this.get_data_from_url( `/starships/${ id }` );
		const transformed_data = await this.transform_data_starship(starship);
		return transformed_data;
	}

	async get_all_starships() {
		const data = await this.get_data_from_url( `/starships/` );
		const transformed_data = await data.results.map(async (starship) => {
			const transformed_data = await this.transform_data_starship(starship);
			return transformed_data;
		});
		const prepared_data = await Promise.all(transformed_data);
		return prepared_data;
	}

}
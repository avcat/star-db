export default class Swapi_Service {

	_api_base = 'https://swapi.dev/api'; // private class property

	async get_data_from_url ( url_part ) {
		try {
			const full_path = `${ this._api_base }${ url_part }`;
			const response = await fetch( full_path );
			if ( !response.ok ) { // if result status is not the one of 200-299
				throw new Error( `Could not fetch from ${ full_path } - received status ${ response.status }` );
			}
			const data = await response.json();
			return data;
		}
		catch( err ) {
			console.error( `No way! ${err}` );
		};
	}

	async get_all_people() {
		const data = await this.get_data_from_url( `/people/` );
		const array_of_objects = await data.results;
		return array_of_objects;
	}
	async get_single_person( id ) {
		const single_object = await this.get_data_from_url( `/people/${ id }` );
		return single_object;
	}

	async get_all_planets() {
		const data = await this.get_data_from_url( `/planets/` );
		const array_of_objects = await data.results;
		return array_of_objects;
	}
	async get_single_planet( id ) {
		const single_object = await this.get_data_from_url( `/planets/${ id }` );
		return single_object;
	}
}
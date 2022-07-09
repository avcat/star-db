export const nmb_from_str = string => parseInt(string.match(/\d+/g)[0]);

export const get_properties = (array_of_property_names, object) => {
	const data = {};

	for (const key in object) {
		if (!array_of_property_names.includes(key)) { continue; }

		if (key === 'homeworld') {
			data[key] = nmb_from_str(object[key]);
			continue;
		} else if (key === 'starships') {
			const value = object[key].map(child => nmb_from_str(child));
			data[key] = value;
			continue;
		}

		data[key] = object[key];
	}

	return data;
}
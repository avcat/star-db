import './Error.css';
import planetExploded from './planet-exploded.jpg';

const Error = ({message}) => {
	return (
		<div className='Error'>
			<img className='rounded-circle shadow-md mb-3' width={120} src={planetExploded} alt='No planet anymore' />
			<p className='fs-5'>The planet you're looking for is probably annihilated already :C</p>
			<code>
				{ message }
			</code>
		</div>
	);
}

export default Error;
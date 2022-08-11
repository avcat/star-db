import './Error.css';
import planetDestroyed from './planet-destroyed.jpg';
import personGone from './person-gone.jpg';
import starshipStolen from './staship-stolen.png';

const Error = ({message, type}) => {

	const content = {
		planet: {
			img: planetDestroyed,
			msg: `The planet you're looking for is probably annihilated already :C`
		},
		person: {
			img: personGone,
			msg: `The person you're looking for is probably gone :C`
		},
		starship: {
			img: starshipStolen,
			msg: `The starship you're looking for has been probably stolen :C`
		},
	}

	return (
		<div className='Error'>

			<img
				className='rounded-circle shadow-md mb-3'
				src={content[type].img}
				alt={`No ${type} anymore`}
			/>
			<p className='fs-5'>
				{content[type].msg}
			</p>

			<code>
				{ message }
			</code>
		</div>
	);
}

export default Error;
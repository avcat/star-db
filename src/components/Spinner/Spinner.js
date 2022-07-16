import './Spinner.css';

const Spinner = (props) => {

	const {
		width
	} = props;

  return (
    <div className="Spinner">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 25 100 50"
				width={width} height={width * .5}
			>
				<path fill="none" stroke="#00bc8c" strokeWidth={width * .15} strokeDasharray={width * .7} d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z" strokeLinecap="round">
					<animate attributeName="stroke-dashoffset" repeatCount="indefinite" dur="1.8s" keyTimes="0;1" values="0;256"></animate>
				</path>
			</svg>
    </div>
  );

}

export default Spinner;
import './Header.css';

const Header = () => {
	return (
		<header className='Header d-flex align-items-center justify-content-between'>
			<a className='logo fs-4' href="#">
        Star DB
      </a>
      <ul className="d-flex m-0 align-items-center fs-5">
        <li>
          <a className='px-3 py-2' href="#">People</a>
        </li>
        <li>
          <a className='px-3 py-2' href="#">Planets</a>
        </li>
        <li>
          <a className='px-3 py-2' href="#">Starships</a>
        </li>
      </ul>
		</header>
	);
}

export default Header;
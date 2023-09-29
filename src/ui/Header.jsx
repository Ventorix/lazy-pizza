import { Link } from 'react-router-dom';

function Header() {
	return (
		<header>
			<Link to={'/'}>Lazy Pizza</Link>
			<p>User</p>
		</header>
	);
}

export default Header;

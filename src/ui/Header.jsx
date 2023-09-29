import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';

function Header() {
	return (
		<header>
			<Link to={'/'}>Lazy Pizza</Link>

			<SearchOrder />

			<p>User</p>
		</header>
	);
}

export default Header;
